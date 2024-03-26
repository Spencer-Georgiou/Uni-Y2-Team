"""
Module for the Order model.
"""

import enum
from datetime import datetime
from typing import List
from typing import Optional
from sqlalchemy import Boolean
from sqlalchemy import DateTime
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
    :cvar waiter_username: Username of the waiter who is assigned to the order
    :cvar status: State of the order, including "Confirming", "Preparing", "Delivering" and
    "Delivered"; defaults to "Confirming"
    :cvar confirmed_by_waiter: Indicator that whether the order is confirmed by a waiter
    :cvar calling_waiter: Indicator of whether the customer is calling their waiter
    :cvar time_created: Time when the order was created
    :cvar table: Table associated with the order
    :cvar menuitem_associations: Association with menuitems
    :cvar waiter: Waiter who is assigned to the order
    """

    class Status(enum.Enum):
        """
        An enum that stands for possible statuses of an order.
        An active order means its status is not finished.
        An inactive order means its status is finished.

        :cvar CONFIRMING: When the order is waiting for confirmation by a waiter
        :cvar PREPARING: When the kitchen is preparing for the order
        :cvar DELIVERING: When the order is ready for a waiter to deliver
        :cvar DELIVERED: When the order has been delivered
        """
        CONFIRMING = "Confirming"
        PREPARING = "Preparing"
        DELIVERING = "Delivering"
        DELIVERED = "Delivered"

    __tablename__ = "order"

    id: Mapped[int] = mapped_column(primary_key=True)
    table_number: Mapped[int] = mapped_column(ForeignKey("table.number"), unique=True)
    waiter_username: Mapped[Optional[str]] = mapped_column(ForeignKey("waiter.username"))
    status: Mapped[Status] = mapped_column(Enum(Status), default=Status.CONFIRMING)
    # use lambda to set default to a dynamically value
    time_created: Mapped[datetime] = mapped_column((DateTime(timezone=True)),
                                                   default=lambda: datetime.now())
    calling_waiter: Mapped[bool] = mapped_column(Boolean, default=False)

    table: Mapped["Table"] = relationship(back_populates="order")
    menuitem_associations: Mapped[List["OrderMenuItemAssociation"]] = relationship(
        back_populates="order", cascade="all, delete-orphan")
    waiter: Mapped[Optional["Waiter"]] = relationship(back_populates="orders")
    paid: Mapped[bool] = mapped_column(Boolean, default=False)

    def __repr__(self):
        return (
            f"Order(id={self.id!r}, table_number={self.table_number!r}, waiter_username="
            f"{self.waiter_username!r}, status={self.status!r}, time_created="
            f"{self.time_created!r}, paid={self.paid!r})")
