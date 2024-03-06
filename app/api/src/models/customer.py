"""
Module for the Customer model.
"""

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from src.models.user import User


class Customer(User):
    """
    A customer model inherited from User to represent customers.

    :cvar username: the identifier of the user who is a customer
    """
    __tablename__ = "customer"
    __mapper_args__ = {
        "polymorphic_identity": User.Role.CUSTOMER,
    }

    username: Mapped[int] = mapped_column(ForeignKey("user.username"), primary_key=True)
