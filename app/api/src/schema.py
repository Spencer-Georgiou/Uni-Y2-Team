"""
Module to serialize or deserialize model instances to or from json with primitive types.
"""
from flask import current_app
from flask import request
from marshmallow import missing as missing_
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow_sqlalchemy.fields import Nested
from marshmallow_sqlalchemy.fields import fields
import urllib.parse
from .models import Allergen
from .models import MenuGroup
from .models import MenuItem
from .models import Order
from .models import OrderMenuItemAssociation
from .models import Session
from .models import db


# pylint: disable=missing-class-docstring
class BaseMeta:
    """Base metaclass for all Schemas, which enable loading and deserialization."""
    load_instance = True
    sqla_session = db.session


class SessionSchema(SQLAlchemyAutoSchema):
    """
    Schema for Session that hides the ID attribute.
    """

    class Meta(BaseMeta):
        model = Session
        exclude = ("id",)


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
        else:
            # the returned url is in the format of "host:port/abstract_path"
            relative_path = urllib.parse.quote(value)
            return self.get_host() + ":" + self.get_port() + "/" + relative_path

    def _deserialize(self, value, attr=None, data=None, **kwargs):
        """
        Deserializes a flask url to a relative path.

        :param value: The value to be deserialized.
        :return: The deserialized value.
        """
        if value is None:
            return value
        else:
            # remove the host and port part in the value
            prefix = self.get_host() + ":" + self.get_port() + "/"
            decoded_path = value.replace(prefix, "")
            return urllib.parse.unquote(decoded_path)

    def get_host(self):
        with current_app.test_request_context():
            return request.host_url[:-1]

    def get_port(self):
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
    menugroup = Nested(MenuGroupSchema, exclude=("menuitems",))
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
        exclude = ("table",)

    table_number = fields.Int()
    status = fields.Enum(Order.Status, by_value=True)
    menuitem_associations = Nested(OrderMenuItemAssociationSchema(many=True), exclude=("order_id",))
