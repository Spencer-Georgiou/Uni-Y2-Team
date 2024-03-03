from sqlalchemy import CheckConstraint
from sqlalchemy import ForeignKey
from sqlalchemy import PrimaryKeyConstraint
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from src.models.base import db


class MenuItemAllergenAssociation(db.Model):
    """
    A many-to-many association between menuitem and allergen

    :cvar menuitem: The associated menuitem
    :cvar allergen: The associated allergen
    """
    __tablename__ = "menuitem_allergen"

    menuitem = mapped_column(ForeignKey("menuitem.name"), primary_key=True)
    allergen = mapped_column(ForeignKey("allergen.name"), primary_key=True)


class OrderMenuItemAssociation(db.Model):
    """
    An association between an order and a menuitem.

    :cvar order_id: Identifier of the associated order
    :cvar menuitem_name: Unique name of the associated menuitem
    :cvar quantity: Amount of the menuitem ordered
    :cvar order: Associated order
    :cvar menuitem: Associated menuitem
    """
    __tablename__ = "order_menuitem"
    __table_args__ = (
        # A group that is a pair of type and category must be unique
        PrimaryKeyConstraint('order_id', 'menuitem_name'),
    )
    order_id: Mapped[int] = mapped_column(ForeignKey("order.id"))
    menuitem_name: Mapped[str] = mapped_column(ForeignKey("menuitem.name"))
    quantity: Mapped[int] = mapped_column(CheckConstraint('quantity > 0'))

    order: Mapped["Order"] = relationship(back_populates="menuitem_associations")
    menuitem: Mapped["MenuItem"] = relationship(back_populates="order_associations")

    def __repr__(self):
        return (f"OrderMenuItemAssociation(order_id={self.order_id}, menuitem_name="
                f"{self.menuitem_name}, quantity={self.quantity})")
