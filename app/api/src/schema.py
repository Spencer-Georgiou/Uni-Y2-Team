"""
Module to serialize or deserialize model instances to or from json with primitive types.
"""
import urllib.parse

from flask import current_app
from flask import request
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow_sqlalchemy.fields import Nested
from marshmallow_sqlalchemy.fields import fields

from src.models import Allergen
from src.models import MenuGroup
from src.models import MenuItem
from src.models import Order
from src.models import OrderMenuItemAssociation
from src.models import Session
from src.models import db
from src.models import Table
from src.models import User
from src.models import Customer


# pylint: disable=missing-class-docstring
class BaseMeta:
    """Base metaclass for all Schemas, which enable loading and deserialization."""
    load_instance = True
    sqla_session = db.session


class SessionSchema(SQLAlchemyAutoSchema):
    """
    Schema for Session that hides the ID attribute and shows which user owns the session.
    """

    class Meta(BaseMeta):
        model = Session
        exclude = ("id",)

    user = Nested("UserSchema", exclude=("session",))


class MenuGroupSchema(SQLAlchemyAutoSchema):
    """
    Schema for MenuGroup.
    """

    class Meta(BaseMeta):
        model = MenuGroup
        include_relationships = True

    type = fields.Enum(MenuGroup.Type, by_value=True)
    category = fields.Enum(MenuGroup.Category, by_value=True)


class AllergenSchema(SQLAlchemyAutoSchema):
    """
    Schema for MenuGroup.
    """

    class Meta(BaseMeta):
        model = Allergen
        include_relationships = True


class Path(fields.Field):
    """Field that serializes a relative path to a flask url and deserializes a flask url to a
    relative path
    """

    def _serialize(self, value, attr=None, obj=None, **kwargs):
        """
        Serializes a relative path to a flask url.

        :param value: The value to be serialized.
        :return: The serialized value.
        """
        if value is None:
            return value

        # the returned url is in the format of "host:port/abstract_path"
        relative_path = urllib.parse.quote(value)
        return self.__get_host() + ":" + self.__get_port() + "/" + relative_path

    def _deserialize(self, value, attr=None, data=None, **kwargs):
        """
        Deserializes a flask url to a relative path.

        :param value: The value to be deserialized.
        :return: The deserialized value.
        """
        if value is None:
            return value

        # remove the host and port part in the value
        prefix = self.__get_host() + ":" + self.__get_port() + "/"
        decoded_path = value.replace(prefix, "")
        return urllib.parse.unquote(decoded_path)

    def __get_host(self):
        # get the host url of the app
        with current_app.test_request_context():
            return request.host_url[:-1]

    def __get_port(self):
        # get the port number of the app
        with current_app.test_request_context():
            return current_app.config["PORT"]


class MenuItemSchema(SQLAlchemyAutoSchema):
    """
    Schema for MenuGroup that shows its menugroup as well as the related allergens.
    """

    class Meta(BaseMeta):
        model = MenuItem
        include_relationships = True
        exclude = ("order_associations",)

    # Convert python Decimal.Decimal() to float type since the previous one cannot be parsed to json
    price = fields.Float()
    image_path = Path()
    menugroup = Nested(MenuGroupSchema(), exclude=("menuitems",))
    allergens = Nested(AllergenSchema(many=True), exclude=("menuitems",))


class OrderMenuItemAssociationSchema(SQLAlchemyAutoSchema):
    class Meta(BaseMeta):
        model = OrderMenuItemAssociation

    order_id = fields.Int()
    menuitem_name = fields.Str()


class OrderSchema(SQLAlchemyAutoSchema):
    class Meta(BaseMeta):
        model = Order
        include_relationships = True
        exclude = ("table", "waiter")

    table_number = fields.Int()
    waiter_username = fields.Str()
    status = fields.Enum(Order.Status, by_value=True)
    menuitem_associations = Nested(OrderMenuItemAssociationSchema(many=True), exclude=("order_id",))


class TableSchema(SQLAlchemyAutoSchema):
    class Meta(BaseMeta):
        model = Table
        include_relationships = True

    order = fields.Nested(OrderSchema(), exclude=("table_number", "table",))


class UserSchema(SQLAlchemyAutoSchema):
    """
    Schema for User that shows its role and session.
    """

    class Meta(BaseMeta):
        model = User
        include_relationships = True

    role = fields.Enum(User.Role, by_value=True)
    session = Nested(SessionSchema, exclude=("user",))


class UnassociatedUser(SQLAlchemyAutoSchema):
    username = fields.String(required=True)
    password = fields.String(required=True)


class CustomerSchema(UserSchema):
    """
    Schema for Customer that inherits all the properties of the User schema.
    """

    class Meta(BaseMeta):
        model = Customer
        include_relationships = True
