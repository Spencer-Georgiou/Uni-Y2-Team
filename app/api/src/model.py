import datetime

from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy


class Base(DeclarativeBase):
    pass


db = SQLAlchemy(model_class=Base)


class User(db.Model):
    r"""
    A user model to map user objects to a user table in a database.

    :param username: the identifier of a user, unique
    :param password: an array of string used to authenticate a user
    """
    __tablename__ = "user"

    username: Mapped[str] = mapped_column(String(32), primary_key=True)
    password: Mapped[str] = mapped_column(String(255))

    session: Mapped["Session"] = relationship(back_populates="user")

    def __repr__(self) -> str:
        return f"User(username={self.username!r}, password={self.password!r})"


class Session(db.Model):
    __tablename__ = "session"
    username: Mapped[str] = mapped_column(ForeignKey("user.username"), primary_key=True,
                                          nullable=False)
    token: Mapped[str] = mapped_column(String(128))
    valid_until: Mapped[datetime.datetime] = mapped_column((DateTime(timezone=True)))

    user: Mapped["User"] = relationship(back_populates="session")

    def __repr__(self):
        return (f"Session(username={self.username!r}, token={self.token!r}, valid_until="
                f"{self.valid_until!r})")
