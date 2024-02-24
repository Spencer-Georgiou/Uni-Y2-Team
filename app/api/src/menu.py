"""
Module that provides the restaurant menus.
"""
from flask_restx import Resource

from .apidoc import apidoc
from flask import current_app

from .model import MenuItem
from .model import db
from .schema import MenuItemSchema


@apidoc.route("/menu")
class Menu(Resource):
    """
    A menu that is accessible via the given api.
    """

    def get(self):
        """
        Return a list of menu items in json format when a get request is received.
        """
        with current_app.app_context():
            all_menu_items = db.session.query(MenuItem).all()
            serialized = MenuItemSchema(many=True).dump(all_menu_items)
            return serialized
