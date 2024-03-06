"""
Module for the fundamental configurations of the database.
"""

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import event
from sqlalchemy.engine import Engine
from sqlalchemy.orm import DeclarativeBase


# enforce the foreign key constraint of sqlite
@event.listens_for(Engine, "connect")
# pylint: disable=unused-argument
# pylint: disable=missing-function-docstring
def set_sqlite_pragma(dbapi_connection, connection_record):
    cursor = dbapi_connection.cursor()
    cursor.execute("PRAGMA foreign_keys=ON")
    cursor.close()


class Base(DeclarativeBase):
    """
    A basic data model that derives object models.
    """
    # pylint: disable=unnecessary-pass
    pass


db = SQLAlchemy(model_class=Base)
