"""
Module for the MenuGroup model.
"""

import enum
from typing import List
from typing import Optional

from sqlalchemy import Enum
from sqlalchemy import PrimaryKeyConstraint
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from src.models.base import db


class MenuGroup(db.Model):
    """
    A data model represents the groups of a menu, such as 'Starter' of 'Food' menu,
    or 'Alcoholic' of 'Drink' menu

    :cvar type: the type of the menu, such as 'Food' or 'Drink'
    :cvar category: the category of a type, such as 'Main' for Food Menu and 'Non-Alcoholic' for
    Drink Menu
    """

    class Type(enum.Enum):
        """
        An enum that is for the type of menus.

        :cvar FOOD: The Food Menu
        :cvar DRINK: The Drink Menu
        """
        FOOD = "Food"
        DRINK = "Drink"

    class Category(enum.Enum):
        """
        An enum that is for the category of menus.

        :cvar STARTER: The starter meals
        :cvar MAIN: The main meals
        :cvar DESSERT: The dessert meals
        :cvar SOFT_DRINK: The soft drinks
        :cvar BEER: The beers
        :cvar COCKTAILS: The cocktails
        :cvar HOT_DRINK: The hot drinks
        """
        STARTER = "Starter"
        MAIN = "Main"
        DESSERT = "Dessert"
        SOFT_DRINK = "Soft Drink"
        BEER = "Beer"
        COCKTAIL = "Cocktails"
        HOT_DRINK = "Hot Drink"


    __tablename__ = "menugroup"
    __table_args__ = (
        # A group that is a pair of type and category must be unique
        PrimaryKeyConstraint('type', 'category'),
    )

    type: Mapped[Type] = mapped_column(Enum(Type))
    category: Mapped[Category] = mapped_column(Enum(Category))

    menuitems: Mapped[Optional[List["MenuItem"]]] = relationship(back_populates="menugroup")

    def __repr__(self):
        return f"MenuGroup(type={self.type!r}, category={self.category!r})"
