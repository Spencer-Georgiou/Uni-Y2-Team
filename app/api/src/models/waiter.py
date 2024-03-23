"""
Module for the Waiter model.
"""

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from typing import List
from typing import Optional
from src.models.order import Order
from src.models.user import User


class Waiter(User):
    """
    A kitchen model inherited from User to represent kitchen staff.

    :cvar username: Identifier of the user who is a kitchen staff
    :cvar orders: List of orders the waiter is assigned to
    """
    __tablename__ = "waiter"
    __mapper_args__ = {
        "polymorphic_identity": User.Role.WAITER,
    }

    username: Mapped[int] = mapped_column(ForeignKey("user.username"), primary_key=True)
    orders: Mapped[Optional[List["Order"]]] = relationship(back_populates="waiter")
