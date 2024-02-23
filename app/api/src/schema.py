"""
Module to serialize or deserialize model instances to or from json with primitive types.
"""
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow_sqlalchemy.fields import Nested
from marshmallow_sqlalchemy.fields import fields

from .model import Allergen
from .model import MenuGroup
from .model import MenuItem


class MenuGroupSchema(SQLAlchemyAutoSchema):
    """
    Schema for MenuGroup that hides the id attribute.
    """

    class Meta:
        model = MenuGroup
        include_relationships = True

    type = fields.Enum(MenuGroup.Type, by_value=True)
    category = fields.Enum(MenuGroup.Category, by_value=True)


class AllergenSchema(SQLAlchemyAutoSchema):
    """
    Schema for MenuGroup that hides the id attribute.
    """

    class Meta:
        model = Allergen
        include_relationships = True


class MenuItemSchema(SQLAlchemyAutoSchema):
    """
    Schema for MenuGroup that hides the id attribute and shows its menugroup as well as the
    related allergens.
    """

    class Meta:
        model = MenuItem
        include_relationships = True

    # Convert python Decimal.Decimal() to float type since the previous one cannot be parsed to json
    price = fields.Float()
    menugroup = Nested(MenuGroupSchema, exclude=("menuitems",))
    allergens = Nested(AllergenSchema(many=True), exclude=("menuitems",))
