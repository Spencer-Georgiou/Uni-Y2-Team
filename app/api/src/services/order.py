from flask.views import MethodView

from src.apidoc import apidoc
from src.models import db
from src.schema import OrderSchema


@apidoc.route("/order")
class Order(MethodView):
    @apidoc.arguments(schema=OrderSchema(only=("table_number", "menuitem_associations",)),
                      location="json")
    @apidoc.response(status_code=200, schema=OrderSchema)
    def post(self, order):
        db.session.add(order)
        db.session.commit()
        return order
