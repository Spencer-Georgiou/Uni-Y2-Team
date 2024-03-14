from src.apidoc import apidoc
from flask_smorest import abort
from flask.views import MethodView
from src import models
from src.apidoc import apidoc
from src.models import db
from src.schema import MenuItemSchema


@apidoc.route("/menuitem")
class Available(MethodView):
    MSG_NO_SUCH_MENUITEM = "Menu item not found."
    @apidoc.arguments(schema=MenuItemSchema(only=("name", "available",)), location="json")
    @apidoc.response(204)
    def patch(self, menuitem_from_request):
        """
        Partially update a menuitem.

        - 204 When there is a menuitem in the database
        - 404 If the requested menuitem does not exist in the database
        """
        menuitem_in_db = db.session.query(models.MenuItem).get(menuitem_from_request.name)
        if not menuitem_in_db:
                abort(404, message=Available.MSG_NO_SUCH_MENUITEM)

        menuitem_in_db.available = menuitem_from_request.available

        db.session.add(menuitem_in_db)
        db.session.commit()