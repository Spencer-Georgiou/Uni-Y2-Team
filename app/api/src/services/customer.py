"""
Module that provides the customer registration.
"""
from flask_smorest import abort
from flask.views import MethodView

from sqlalchemy import insert
from sqlalchemy.exc import SQLAlchemyError

from src.apidoc import apidoc

from src import models
from src.models import db
from src.models.user import hash_pwd
from src.schema import CustomerSchema


@apidoc.route("/customer")
class Customer(MethodView):
    """
    Register a customer with username and password provided.
    """
    
    @apidoc.response(200, schema=CustomerSchema(exclude=("password",)), description="User created.")
    @apidoc.arguments(schema=CustomerSchema(only=("username", "password",)),
                      location="json")
    def post(self, new_customer):
        """
        Create a new user if it does not exist.

        Check if the username already exists. If not, insert the username and password provided into the 'Customer' table.

        - 200 The user is not in the database yet.
        - 409 The username is unavailable.
        """
        existing_customer = db.session.query(models.Customer).get(new_customer.username)
        if existing_customer is not None:
            abort(409, message="Customer already exists.")

        new_customer.password = hash_pwd(new_customer.password)

        db.session.add(new_customer)
        db.session.commit()
        return new_customer
