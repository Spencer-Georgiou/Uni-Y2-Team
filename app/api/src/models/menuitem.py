from typing import List
from typing import Optional

from sqlalchemy import CheckConstraint
from sqlalchemy import Enum
from sqlalchemy import ForeignKeyConstraint
from sqlalchemy import Integer
from sqlalchemy import Numeric
from sqlalchemy import String
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from .base import db
from .menugroup import MenuGroup


class MenuItem(db.Model):
    """
    A data model for the object 'menu item', an item that can be displayed on a menu.

    :cvar name: the name of the menu item
    :cvar description: the description of the menu item, which can be more detailed than its name
    :cvar calorie: the amount of energy the menu item contains in kcal
    :cvar price: the price of the menu item
    :cvar allergens: the list of allergens the menu item contains
    :cvar order_associations: the association with orders
    """
    __tablename__ = "menuitem"
    __table_args__ = (
        ForeignKeyConstraint(
            ("menugroup_type", "menugroup_category"), ("menugroup.type", "menugroup.category")
        ),
    )
    name: Mapped[str] = mapped_column(String, primary_key=True)
    description: Mapped[str] = mapped_column(String)
    calorie: Mapped[int] = mapped_column(Integer, CheckConstraint('calorie > 0'))
    price: Mapped[int] = mapped_column(Numeric(scale=2), CheckConstraint('price > 0'))
    menugroup_type: Mapped[MenuGroup.Type] = mapped_column(Enum(MenuGroup.Type))
    menugroup_category: Mapped[MenuGroup.Category] = mapped_column(Enum(MenuGroup.Category))

    allergens: Mapped[Optional[List["Allergen"]]] = relationship(back_populates="menuitems",
                                                                 secondary="menuitem_allergen")
    menugroup: Mapped["MenuGroup"] = relationship(back_populates="menuitems",
                                                  foreign_keys=[menugroup_type, menugroup_category])
    order_associations: Mapped[List["OrderMenuItemAssociation"]] = relationship(
        back_populates="menuitem")

    def __repr__(self):
        return (f"MenuItem(name={self.name!r}, description={self.description!r}, "
                f"calorie={self.calorie!r}, price={self.price!r})")
