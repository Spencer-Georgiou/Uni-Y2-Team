"""
Module that provides the user registration.
"""
from flask_smorest import abort
from flask.views import MethodView

from sqlalchemy import insert
from sqlalchemy.exc import SQLAlchemyError

from src.apidoc import apidoc

from src import models
from src.models import db
from src.schema import UserSchema


@apidoc.route("/user")
class User(MethodView):
    """
    Register a user with username and password provided.
    """
    
    @apidoc.response(204)
    @apidoc.arguments(schema=UserSchema(only=("username", "password",)),
                      location="json")
    def post(self, new_user):
        """
        Check if the username already exists. If not, insert the username and password provided into the 'User' table.
        """
        existing_user = db.session.query(models.User).get(new_user.username)
        if existing_user is not None:
            abort(409, message="User already exists.")
        
        db.session.add(new_user)
        db.session.commit()