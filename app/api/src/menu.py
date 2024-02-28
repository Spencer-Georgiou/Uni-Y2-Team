"""
Module that provides the restaurant menus.
"""
from flask.views import MethodView

from .apidoc import apidoc

from .model import MenuItem
from .model import db
from .schema import MenuItemSchema


@apidoc.route("/menu")
class Menu(MethodView):
    """
    A menu that is accessible via the given api.
    """

    @apidoc.response(200, schema=MenuItemSchema(many=True), description="A list of menu items.")
    def get(self):
        """
        Return a list of menu items in json format when a get request is received.
        """
        all_menu_items = db.session.query(MenuItem).all()
        return all_menu_items
