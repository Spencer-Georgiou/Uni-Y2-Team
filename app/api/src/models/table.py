"""
Module for the Table model.
"""

from typing import Optional

from sqlalchemy import CheckConstraint
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from src.models.base import db
from src.models.order import Order


class Table(db.Model):
    """
    A data model represents restaurant tables.

    :cvar number: Table number
    :cvar orders: Order associated with the table
    """
    __tablename__ = "table"
    number: Mapped[int] = mapped_column(CheckConstraint('number > 0'), primary_key=True)

    order: Mapped[Optional["Order"]] = relationship(back_populates="table")

    def __repr__(self):
        return f"Table(number={self.number!r})"

    def is_available(self):
        """
        Return the availability of the table.

        :return: True if the table has no order associated with it, False otherwise.
        """
        return self.order is None
