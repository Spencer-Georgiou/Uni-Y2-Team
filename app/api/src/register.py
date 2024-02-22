"""
Module that provides the restaurant menus.
"""
from flask_restx import Resource

from .apidoc import apidoc
from flask import current_app, request

from .model import User
from .model import db


@apidoc.route("/register")
class Register(Resource):
    """
    Register a user with username and password provided.
    """
    username = request.args.get('username')
    password = request.args.get('password')
    def get(self):
        """
        Check if the username already exists.
        """
        with current_app.app_context():
            all_users = db.session.query(User).all()
            if username in all_users:
                return True
            else:
                return False
