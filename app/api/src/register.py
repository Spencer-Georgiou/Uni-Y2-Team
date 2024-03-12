"""
Module that provides the restaurant menus.
"""
from flask_restx import Resource

from sqlalchemy import insert
from sqlalchemy.exc import SQLAlchemyError

from .apidoc import apidoc
from flask import current_app, request

from .model import User
from .model import db


@apidoc.route("/register")
class Register(Resource):
    """
    Register a user with username and password provided.
    """
    
    def post(self):
        """
        Check if the username already exists. If not, insert the username and password provided into the 'User' table.
        """
        with current_app.app_context():
            data = request.get_json()
            username = data.get('username')
            password = data.get('password')
            all_users = db.session.query(User.username).all()
            if username in all_users:
                return "Failed", 403
            else:
                insert(User).values(username=username, password=password)
                return "Success", 200
