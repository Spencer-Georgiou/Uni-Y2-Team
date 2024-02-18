from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow_sqlalchemy.fields import Nested

from src.model import Allergen
from src.model import MenuGroup


class MenuGroupSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = MenuGroup
        include_relationships = True


class AllergenSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Allergen
        include_relationships = True
