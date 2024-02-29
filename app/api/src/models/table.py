from typing import List
from typing import Optional

from sqlalchemy import CheckConstraint
from sqlalchemy import and_
from sqlalchemy import select
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from .base import db
from .order import Order


class Table(db.Model):
    """
    A data model represents restaurant tables.

    :cvar number: the table number
    :cvar orders: the orders associated with the table
    """
    __tablename__ = "table"
    number: Mapped[int] = mapped_column(CheckConstraint('number > 0'), primary_key=True)

    orders: Mapped[Optional[List["Order"]]] = relationship(back_populates="table")

    def __repr__(self):
        return (f"Table(number={self.number!r})")

    def get_active_order(self):
        """
        Return the active order associated with the table if it has one, none otherwise.

        :return: the active order or none
        """
        stmt = select(Order).where(
            and_(Order.table == self,
                 Order.status != Order.Status.FINISHED)
        )
        result = db.session.scalars(stmt)
        active_order = result.first()
        return active_order

    def is_available(self):
        """
        Return the availability of the table.

        :return: True if the table has no active order, False otherwise.
        """
        return not bool(self.get_active_order())
