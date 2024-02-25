"""
Module that provides the restaurant menus.
"""
from flask_restx import Resource

from sqlalchemy import insert

from .apidoc import apidoc
from flask import current_app, request

from .model import User
from .model import db


@apidoc.route("/register")
class Register(Resource):
    """
    Register a user with username and password provided.
    """
    
    def get(self):
        """
        Check if the username already exists. If not, insert the username and password provided into the 'User' table.
        """
        with current_app.app_context():
            user = request.args.get('username')
            pwd = request.args.get('password')
            all_users = db.session.query(User).all()
            if username in all_users:
                return "Failed"
            else:
                insert(User).values(username=user, password=pwd)
                return "Success"
