"""
Module for the Session model.
"""

import hashlib
import random
import time
from datetime import datetime
from datetime import timedelta

from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy import String
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from src.models.base import db
from src.models.user import User


def generate_token(context):
    # unique to username and time created with extra randomness
    salt = "a2dec157bd01"  # difficult to guess
    curr_time = time.time()
    rand = random.randint(9, 99999)
    # hash the username of the associated user
    username = context.get_current_parameters()["user_username"]
    to_hash = salt + username + str(int(curr_time * rand))

    return hashlib.sha256(to_hash.encode("utf-8")).hexdigest()


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
    user_username: Mapped[str] = mapped_column(ForeignKey("user.username"),
                                               unique=True)
    token: Mapped[str] = mapped_column(String(128), default=generate_token)
    # use lambda to set default to a dynamically value
    expires: Mapped[datetime] = mapped_column((DateTime(timezone=True)),
                                              default=lambda: datetime.now() + timedelta(days=1))

    user: Mapped["User"] = relationship(back_populates="session")

    def __repr__(self):
        return (
            f"Session(id={self.id!r}, user_username={self.user_username!r}, token={self.token!r}, "
            f"expires="
            f"{self.expires!r})")
