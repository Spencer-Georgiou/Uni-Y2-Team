"""
Module for the User model.
"""

import enum
from typing import Optional

from sqlalchemy import Enum
from sqlalchemy import String
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from src.models.base import db

import hashlib

def hash_pwd(pwd):
    pwd_bytes = pwd.encode("utf-8")
    salt_bytes = "4fb0da9de59b".encode("utf-8")
    return hashlib.sha256(pwd_bytes + salt_bytes).hexdigest()

class User(db.Model):
    """
    A user model to map user objects to a user table in a database. It is an abstract model,
    which can be inherited but not instantiated.

    :cvar username: Identifier of the user
    :cvar password: Array of string used to authenticate the user
    :cvar session: Session that the user has
    """

    class Role(enum.Enum):
        """
        Enumeration of user roles.
        """
        CUSTOMER = "Customer"
        WAITER = "Waiter"
        KITCHEN = "Kitchen"

    __tablename__ = "user"
    __mapper_args__ = {
        "polymorphic_abstract": True,
        "polymorphic_on": "role",
    }

    username: Mapped[str] = mapped_column(String(32), primary_key=True)
    password: Mapped[str] = mapped_column(String(255))
    role: Mapped[Role] = mapped_column(Enum(Role))

    session: Mapped[Optional["Session"]] = relationship(back_populates="user",
                                                        cascade="all, delete-orphan")

    def __repr__(self) -> str:
        return f"{self.__class__.__name__}(username={self.username!r}, password={self.password!r})"
