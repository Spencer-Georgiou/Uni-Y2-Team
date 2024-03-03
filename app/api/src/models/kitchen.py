from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from src.models.user import User


class Kitchen(User):
    """
    A kitchen model inherited from User to represent kitchen staff.

    :cvar username: Identifier of the user who is a kitchen staff
    """
    __tablename__ = "kitchen"
    __mapper_args__ = {
        "polymorphic_identity": User.Role.KITCHEN,
    }

    username: Mapped[int] = mapped_column(ForeignKey("user.username"), primary_key=True)
