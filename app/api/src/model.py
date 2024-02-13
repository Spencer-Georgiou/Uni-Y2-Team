from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy import String
from sqlalchemy.orm import mapped_column
from sqlalchemy import create_engine


class Base(DeclarativeBase):
    pass


class User(Base):
    """
    A user model to map user objects to a user table in a database.

    Attribute:
    username: the identifier of a user, unique
    password: an array of string used to authenticate a user
    """
    __tablename__ = "user"

    username: Mapped[str] = mapped_column(String(32), primary_key=True)
    password: Mapped[str] = mapped_column(String(255))

    def __repr__(self) -> str:
        return f"User(username={self.username!r}, password={self.password!r})"


engine = create_engine("sqlite://", echo=True)
Base.metadata.create_all(engine)
