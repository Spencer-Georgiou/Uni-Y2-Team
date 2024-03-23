from flask.views import MethodView
from src.apidoc import apidoc
from src.schema import OrderSchema
from src.schema import PaymentSchema
from src.models import db, Order, MenuItem
from src.services.order import Order as OrderService
from flask_smorest import abort
from flask import request, redirect
import stripe
import hashlib


def order_hash(order_id):
    salt = "d26eae8f6e11"  # difficult to guess
    to_hash = str(order_id) + salt
    return hashlib.sha256(to_hash.encode("utf-8")).hexdigest()


@apidoc.route("/payment")
class Payment(MethodView):
    """
    A class that provides APIs to make a payment and verify that a payment has been made.
    """

    stripe.api_key = \
        "sk_test_51OmtvYAyzmLx9hrpuOwoVN3XyTkKGHeSMbpakJ7ySzbiY8vKPKpAMDOG7q5ZrOrI3pJvFiGvYr4TsL2yInzAIPn500fiu7JnXs"

    @apidoc.arguments(schema=OrderSchema(only=["id"]), location="json")
    @apidoc.response(200, schema=PaymentSchema)
    def post(self, order_request):
        """
        Return a Stripe URL to pay for an order.

        - 200 When a valid order ID has been provided
        - 404 When order ID provided doesn't exist
        - 500 When Stripe error occurs
        """

        order_db = db.session.query(Order).get(order_request.id)

        if order_db is None:
            abort(404, message=OrderService.MSG_NO_SUCH_ORDER)

        # order_db.menuitem_associations is list of OrderMenuItemAssociation
        total_amount = 0
        for order_item in order_db.menuitem_associations:
            total_amount += db.session.query(MenuItem).get(
                order_item.menuitem_name).price * order_item.quantity

        try:
            session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=[{
                    'price_data': {
                        'currency': "gbp",
                        'unit_amount': int(total_amount * 100),  # in pence
                        'product_data': {
                            'name': "Total Order Cost",
                        },
                    },
                    'quantity': 1,
                }],
                mode='payment',
                success_url=f'http://localhost:5000/api/payment?id={order_hash(order_db.id)}&order={order_db.id}',
                cancel_url='http://localhost:5000/api/payment?',
            )
            return {"payment_url": session.url}
        except stripe.error.StripeError as e:
            abort(500, message="Stripe Error: " + str(e))

    @apidoc.response(303)
    def get(self):
        """
        Updates order paid status. Not for frontend use.

        Redirect from Stripe-hosted page after successful login.
        """

        id = request.args.get("id")
        order = request.args.get("order")

        # verify id
        if id == order_hash(order):
            order_db = db.session.query(Order).get(int(order))
            if order_db is None:
                abort(404, message=OrderService.MSG_NO_SUCH_ORDER)

            order_db.paid = True  # update order's paid status
            db.session.commit()

            return redirect("http://localhost:3000"), 303  # redirect 'See Other'

        abort(401, message="Invalid ID")  # unauthorised
