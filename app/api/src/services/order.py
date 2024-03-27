"""
Module that provide apis to manipulate orders.
"""
from flask.views import MethodView
from flask_smorest import abort
from sqlalchemy.exc import IntegrityError

from src import models
from src.apidoc import apidoc
from src.models import db
from src.schema import OrderSchema


@apidoc.route("/order")
class Order(MethodView):
    """
    Class that provide apis to manipulate order instances at "/order".
    """
    MSG_INCORRECT_DATA = "The values of arguments are incorrect from the request."
    MSG_NO_SUCH_ORDER = "Order does not exist."

    @apidoc.arguments(schema=OrderSchema(only=("table_number", "menuitem_associations",)),
                      location="json")
    @apidoc.response(status_code=200, schema=OrderSchema)
    def post(self, new_order):
        """
        Create an order.

        - Create an order in the database with the given data.
        - Return 422 if the input data is invalid.
        """
        try:
            db.session.add(new_order)
            db.session.commit()
            return new_order
        # when input values are not fit to the db constraints
        except IntegrityError:
            abort(422,
                  message=Order.MSG_INCORRECT_DATA)

    @apidoc.response(204)
    @apidoc.arguments(schema=OrderSchema(only=("id",)), location="query", )
    def delete(self, order_from_request):
        """
        Delete an order.

        - Delete an order in the database with the given ID.
        - Return 404 if the order is not found in the database.
        """
        order_in_db = db.session.query(models.Order).get(order_from_request.id)
        # raise 404 when order is not found
        if order_in_db is None:
            abort(404, message=Order.MSG_NO_SUCH_ORDER)
        else:
            db.session.delete(order_in_db)
            db.session.commit()

    @apidoc.arguments(schema=OrderSchema(only=("id", "status", "waiter_username", "calling_waiter",)),
                      location="json", required=False)
    @apidoc.response(status_code=200, schema=OrderSchema)
    def patch(self, order_from_request):
        """
        Partially update an order.

        - Updates specified fields of an order based on user role.
        - Validates user role using a token in the cookie.
        - Returns 404 if the order is not found.
        - Returns 403 if the user does not have the required permissions.
        """
        if order_from_request.id is None:
            abort(422,
                  message=Order.MSG_INCORRECT_DATA)

        order_in_db = db.session.query(models.Order).get(order_from_request.id)
        if order_in_db is None:
            abort(404, message=Order.MSG_NO_SUCH_ORDER)

        # prohibit a non-confirming order has no waiter assigned to it
        if (order_from_request.status is not models.Order.Status.CONFIRMING and
                order_from_request.waiter_username is None and
                order_in_db.waiter_username is None):
            abort(422, message=Order.MSG_INCORRECT_DATA)
        
        order_in_db.status = order_from_request.status
        order_in_db.calling_waiter = order_from_request.calling_waiter

        db.session.add(order_in_db)
        db.session.commit()
        return order_in_db

    @apidoc.arguments(schema=OrderSchema(only=("id",)), location="query")
    @apidoc.response(status_code=200, schema=OrderSchema)
    def get(self, order_from_request):
        """
        Return an order.

        - Return an order with the given ID if it exists in the database.
        - Return 404 if the order is not found in the database.
        """
        order_in_db = db.session.query(models.Order).get(order_from_request.id)

        # raise 404 when order is not found
        if order_in_db is None:
            abort(404, message=Order.MSG_NO_SUCH_ORDER)

        return order_in_db
