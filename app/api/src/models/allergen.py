"""
Module for the Allergen model.
"""

from typing import List
from typing import Optional

from sqlalchemy import String
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from src.models.base import db
from src.models.menuitem import MenuItem


class Allergen(db.Model):
    """
    An allergen model to represent food or drink allergens.

    :cvar name: Name of the allergen
    :cvar menuitems: Associated menu items that contains the allergen
    """

    __tablename__ = "allergen"

    name: Mapped[str] = mapped_column(String, primary_key=True)

    menuitems: Mapped[Optional[List["MenuItem"]]] = relationship(back_populates="allergens",
                                                                 secondary="menuitem_allergen")

    def __repr__(self):
        return f'Allergen(name={self.name!r})'
