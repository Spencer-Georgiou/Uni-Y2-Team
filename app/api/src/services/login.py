import hashlib
import random
import time

from flask import request
from flask.views import MethodView
from sqlalchemy.exc import SQLAlchemyError

from src.apidoc import apidoc
from src.models import User
from src.models import Session
from src.models import db


# unique to username and time created with extra randomness
def generate_token(username):
    salt = "a2dec157bd01" # difficult to guess
    curr_time = time.time()
    rand = random.randint(9, 99999)
    to_hash = salt + username + str(int(curr_time * rand))

    return hashlib.sha256(to_hash.encode("utf-8")).hexdigest()

def create_session(username):
    # delete existing session 
    old_session = db.session.query(Session).filter_by(user_username=username).first()
    if old_session:
        db.session.delete(old_session)
        db.session.commit()
    
    # create new session
    new_token = generate_token(username)
    new_session = Session(user_username=username, token=new_token)
    db.session.add(new_session)
    db.session.commit()

    return new_token

@apidoc.route("/login")
class Login(MethodView):
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

            return {"session_key": create_session(username), "role": user.__tablename__,
                    "error_message": None}, 200
        except SQLAlchemyError:
            return {"error_message": "Database error occurred"}, 500
        except Exception as e:
            return {"error_message": str(e)}, 500

# INSTRUCTIONS-READ-ME
# Run the app and send POST requests to /api/login with 'username' and 'password' parameters to
# authenticate users.
