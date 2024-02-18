from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow_sqlalchemy.fields import Nested

from src.model import MenuGroup


class MenuGroupSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = MenuGroup
        include_relationships = True
