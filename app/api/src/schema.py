from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow_sqlalchemy.fields import Nested

from src.model import Allergen
from src.model import MenuGroup
from src.model import MenuItem


class MenuGroupSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = MenuGroup
        include_relationships = True
        exclude = ["id"]


class AllergenSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Allergen
        include_relationships = True
        exclude = ["id"]


class MenuItemSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = MenuItem
        include_relationships = True
        exclude = ["id"]

    menugroup = Nested(MenuGroupSchema, exclude=("menuitems",))
