from flask import request
from .apidoc import apidoc
from flask_restx import Resource

from sqlalchemy.exc import SQLAlchemyError
from .model import User
from .model import db

import hashlib
import random
import time


# unique to username and time created with extra randomness
def generate_token(username):
    curr_time = time.time()
    rand = random.randint(9, 9999)
    to_hash = username + str(int(curr_time * rand))

    return hashlib.sha256(to_hash.encode("utf-8")).hexdigest()

@apidoc.route("/login")
class Login(Resource):
    def post(self):
        try:
            data = request.get_json()
            if not data or 'username' not in data or 'password' not in data:
                return {"error_message": "Missing username or password"}, 400

            username = data.get('username')
            password = data.get('password')

            user = db.session.query(User).filter_by(username=username).first()

            # need to create hash() for use here and for registration
            if not user or user.password != password:
                return {"error_message": "Invalid credentials"}, 401

            return {"session_key": generate_token(username), "error_message": None}, 200
        except SQLAlchemyError:
            return {"error_message": "Database error occurred"}, 500
        except Exception as e:
            return {"error_message": str(e)}, 500


# INSTRUCTIONS-READ-ME
# Run the app and send POST requests to /api/login with 'username' and 'password' parameters to authenticate users.
