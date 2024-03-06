"""
Module for the Order model.
"""

import enum
from typing import List

from sqlalchemy import Boolean
from sqlalchemy import Enum
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from sqlalchemy.orm import validates

from src.models.association import OrderMenuItemAssociation
from src.models.base import db


class Order(db.Model):
    """
    A data model represents an order that is made by a table.

    :cvar id: Identifier of the order
    :cvar table_number: Table number assigned to the order
    :cvar status: State of the order, including "Ordering", "Preparing", "Delivering",
    "Delivered" and "Finished"; defaults to "Ordering"
    :cvar confirmed_waiter: Indicator that whether the order is confirmed by a waiter
    :cvar confirmed_kitchen: Indicator that whether the order is confirmed by a kitchen staff
    :cvar table: Table associated with the order
    :cvar menuitem_associations: Association with menuitems
    """

    class Status(enum.Enum):
        """
        An enum that stands for possible statuses of an order.
        An active order means its status is not finished.
        An inactive order means its status is finished.

        :cvar ORDERING: When a customer is making an order
        :cvar PREPARING: When the kitchen is preparing for the order
        :cvar DELIVERING: When the order is ready for a waiter to deliver
        :cvar DELIVERED: When the order has been delivered
        :cvar FINISHED: When the order is finished, i.e. the customer left the table
        """
        ORDERING = "Ordering"
        PREPARING = "Preparing"
        DELIVERING = "Delivering"
        DELIVERED = "Delivered"
        FINISHED = "Finished"

    __tablename__ = "order"

    id: Mapped[int] = mapped_column(primary_key=True)
    table_number: Mapped[int] = mapped_column(ForeignKey("table.number"))
    status: Mapped[Status] = mapped_column(Enum(Status), default=Status.ORDERING)
    confirmed_waiter: Mapped[bool] = mapped_column(Boolean, default=False)
    confirmed_kitchen: Mapped[bool] = mapped_column(Boolean, default=False)

    table: Mapped["Table"] = relationship(back_populates="orders")
    menuitem_associations: Mapped[List["OrderMenuItemAssociation"]] = relationship(
        back_populates="order")

    def __repr__(self):
        return (
            f"Order(id={self.id!r}, table_number={self.table_number!r}, status={self.status!r}, "
            f"confirmed_waiter="
            f"{self.confirmed_waiter!r}, confirmed_kitchen={self.confirmed_kitchen!r})")

    @validates("table")
    # validate whether the table, which the order is assigned, is available
    # pylint: disable=unused-argument
    def validate_table(self, key, table):
        """
        Will be deprecated soon since the relationship between table and order are going to be
        one-to-one.
        """
        active_order = table.get_active_order()
        if active_order:
            raise ValueError(
                f"The active order {active_order} has already been assigned to {table}.")
        return table
