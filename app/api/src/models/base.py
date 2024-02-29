from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    """
    A basic data model that derives object models.
    """
    pass


db = SQLAlchemy(model_class=Base)
