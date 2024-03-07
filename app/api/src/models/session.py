"""
Module for the Session model.
"""

from datetime import datetime
from datetime import timedelta

from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy import String
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from sqlalchemy.sql import functions
from src.models.base import db
from src.models.user import User


class Session(db.Model):
    """
    A session model to record data of a session between the client and the server.

    :cvar id: Identifier of the session
    :cvar user_username: Username of the associated user
    :cvar token: Secret key to authenticate the session
    :cvar expires: Time when the session is valid until
    :cvar user: User the session belongs to
    """

    __tablename__ = "session"
    id: Mapped[int] = mapped_column(primary_key=True)
    user_username: Mapped[str] = mapped_column(ForeignKey("user.username"))
    token: Mapped[str] = mapped_column(String(128))
    # use lambda to set default to a dynamically value
    expires: Mapped[datetime] = mapped_column((DateTime(timezone=True)),
                                              default=lambda: datetime.now() + timedelta(days=1))

    user: Mapped["User"] = relationship(back_populates="session")

    def __repr__(self):
        return (
            f"Session(id={self.id!r}, user_username={self.user_username!r}, token={self.token!r}, "
            f"expires="
            f"{self.expires!r})")
