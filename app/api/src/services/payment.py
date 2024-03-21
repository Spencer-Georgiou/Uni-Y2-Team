from flask.views import MethodView
from src.apidoc import apidoc
from src.schema import OrderSchema
from src.models import db, Order, MenuItem
from src.services.order import Order as OrderService
from flask_smorest import abort
import stripe


@apidoc.route("/payment")
class Payment(MethodView):
    """
    A class that provides a POST API to make a payment
    """

    stripe.api_key = "sk_test_51OmtvYAyzmLx9hrpuOwoVN3XyTkKGHeSMbpakJ7ySzbiY8vKPKpAMDOG7q5ZrOrI3pJvFiGvYr4TsL2yInzAIPn500fiu7JnXs"

    @apidoc.arguments(schema=OrderSchema(only=["id"]), location="json")
    @apidoc.response(200)
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
            total_amount += db.session.query(MenuItem).get(order_item.menuitem_name).price * order_item.quantity

        try:
            session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=[{
                    'price_data': {
                        'currency': "gbp",
                        'unit_amount': int(total_amount * 100), # in pence
                        'product_data': {
                            'name': "Total Order Cost",
                        },
                    },
                    'quantity': 1,
                }],
                mode='payment',
                success_url='http://localhost:3000/',
                cancel_url='http://localhost:3000/',
            )
            return session.url
        except stripe.error.StripeError as e:
            abort(500, message="Stripe Error: " + str(e))
