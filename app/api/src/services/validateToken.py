from flask import request
from src.apidoc import apidoc
from flask_restx import Resource

from sqlalchemy.exc import SQLAlchemyError
from src.models import User
from src.models import db


@apidoc.route('/api/validate-token', methods=['POST'])
class ValidateToken(Resource):
    def post(self):
        try:
            data = request.get_json()
            if not data or 'session_key' not in data:
                return {"error_message": "Missing session key"}, 400

            session_key = data.get('session_key')
            user = db.session.query(User).filter_by(session_key=session_key).all()

            if not user:
                return {"error_message": "Invalid session key"}, 401

            # Return only username and role
            return {"username": user.username, "role": user.role}, 200

        except SQLAlchemyError:
            return {"error_message": "Database error occurred"}, 500
        except Exception as e:
            return {"error_message": str(e)}, 500
