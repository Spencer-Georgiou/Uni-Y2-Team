"""
Module that provide apis to manipulate orders.
"""
from flask.views import MethodView
from flask_smorest import abort
from sqlalchemy.exc import IntegrityError

from src.apidoc import apidoc
from src.models import db
from src.schema import OrderSchema


@apidoc.route("/order")
class Order(MethodView):
    """
    Class that provide apis to manipulate order instances.
    """
    MSG_INCORRECT_POST_DATA = "The order cannot be created because the data provided is incorrect."

    @apidoc.arguments(schema=OrderSchema(only=("table_number", "menuitem_associations",)),
                      location="json")
    @apidoc.response(status_code=200, schema=OrderSchema)
    def post(self, order):
        """
        Create an order in the database with the given data.
        """
        try:
            db.session.add(order)
            db.session.commit()
            return order
        # when input values are not fit to the db constraints
        except IntegrityError:
            abort(422,
                  message=Order.MSG_INCORRECT_POST_DATA)
