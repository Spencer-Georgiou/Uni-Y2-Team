"""
Module for the Order model.
"""

import enum
from datetime import datetime
from typing import List

from sqlalchemy import Boolean
from sqlalchemy import DateTime
from sqlalchemy import Enum
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from src.models.association import OrderMenuItemAssociation
from src.models.base import db


class Order(db.Model):
    """
    A data model represents an order that is made by a table.

    :cvar id: Identifier of the order
    :cvar table_number: Table number assigned to the order
    :cvar status: State of the order, including "Preparing", "Delivering" and
    "Delivered"; defaults to "Preparing"
    :cvar confirmed_by_waiter: Indicator that whether the order is confirmed by a waiter
    :cvar time_created: Time when the order was created
    :cvar table: Table associated with the order
    :cvar menuitem_associations: Association with menuitems
    """

    class Status(enum.Enum):
        """
        An enum that stands for possible statuses of an order.
        An active order means its status is not finished.
        An inactive order means its status is finished.

        :cvar PREPARING: When the kitchen is preparing for the order
        :cvar DELIVERING: When the order is ready for a waiter to deliver
        :cvar DELIVERED: When the order has been delivered
        """
        PREPARING = "Preparing"
        DELIVERING = "Delivering"
        DELIVERED = "Delivered"
        CONFIRMING = "Confirming"

    __tablename__ = "order"

    id: Mapped[int] = mapped_column(primary_key=True)
    table_number: Mapped[int] = mapped_column(ForeignKey("table.number"), unique=True)
    status: Mapped[Status] = mapped_column(Enum(Status), default=Status.CONFIRMING)
    confirmed_by_waiter: Mapped[bool] = mapped_column(Boolean, default=False)
    # use lambda to set default to a dynamically value
    time_created: Mapped[datetime] = mapped_column((DateTime(timezone=True)),
                                                   default=lambda: datetime.now())

    table: Mapped["Table"] = relationship(back_populates="order")
    menuitem_associations: Mapped[List["OrderMenuItemAssociation"]] = relationship(
        back_populates="order", cascade="all, delete-orphan")

    def __repr__(self):
        return (
            f"Order(id={self.id!r}, table_number={self.table_number!r}, status={self.status!r}, "
            f"confirmed_by_waiter="
            f"{self.confirmed_by_waiter!r})")
