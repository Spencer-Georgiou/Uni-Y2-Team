import hashlib
import random
import time

from flask import request
from flask.views import MethodView
from sqlalchemy.exc import SQLAlchemyError
from flask_smorest import abort

from src.apidoc import apidoc
from src.models import User
from src.models import Session
from src.models import db
from src.schema import UnassociatedUser


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
    """
    Class that provides a POST API to authenticate a user at "/login".
    """

    MSG_INVALID_CREDS = "Invalid credentials"

    @apidoc.arguments(schema=UnassociatedUser(only=("username", "password")), location="json")
    @apidoc.response(200)
    def post(self, creds_request):
        """
        Validate credentials and return a session token.

        - 200 When there is a successful login attempt
        - 401 When invalid credentials are provided
        """
        username = creds_request["username"]
        password = creds_request["password"]

        user_db = db.session.query(User).filter_by(username=username).first()

        # need to create hash() for use here and for registration
        if user_db is None or user_db.password != password:
            abort(401, message=Login.MSG_INVALID_CREDS)

        return {"session_key": create_session(username), "role": user_db.__tablename__}, 200

# INSTRUCTIONS-READ-ME
# Run the app and send POST requests to /api/login with 'username' and 'password' parameters to
# authenticate users.
#