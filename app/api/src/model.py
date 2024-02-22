"""
Module for Object-Relation models that maps objects to tables stored in a database.
"""
from datetime import datetime
from datetime import timedelta
from typing import List
from typing import Optional

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import CheckConstraint
from sqlalchemy import Enum
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import Numeric
from sqlalchemy import String
from sqlalchemy import Boolean
from sqlalchemy import UniqueConstraint
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from src.enum import MenuCategory
from src.enum import MenuType
from src.enum import OrderStatus


class Base(DeclarativeBase):
    """
    A basic data model that derives object models.
    """
    pass


db = SQLAlchemy(model_class=Base)


class User(db.Model):
    """
    A user model to map user objects to a user table in a database.

    :cvar username: the identifier of the user
    :cvar password: the array of string used to authenticate the user
    :cvar session: the session that the user has
    """
    __tablename__ = "user"

    username: Mapped[str] = mapped_column(String(32), primary_key=True)
    password: Mapped[str] = mapped_column(String(255))

    session: Mapped[Optional["Session"]] = relationship(back_populates="user")

    def __repr__(self) -> str:
        return f"User(username={self.username!r}, password={self.password!r})"


class Session(db.Model):
    """
    A session model to record data of a session between the client and the server.

    :cvar id: the identifier of the session
    :cvar user_username: the username of the associated user
    :cvar token: the secret key to authenticate the session
    :cvar expires: the time when the session is valid until
    :cvar user: the user the session belongs to
    """
    __tablename__ = "session"
    id: Mapped[int] = mapped_column(primary_key=True)
    user_username: Mapped[str] = mapped_column(ForeignKey("user.username"))
    token: Mapped[str] = mapped_column(String(128))
    expires: Mapped[datetime] = mapped_column((DateTime(timezone=True)),
                                              default=datetime.now() + timedelta(days=1))

    user: Mapped["User"] = relationship(back_populates="session")

    def __repr__(self):
        return (
            f"Session(id={self.id!r}, user_username={self.user_username!r}, token={self.token!r}, "
            f"expires="
            f"{self.expires!r})")


class Allergen(db.Model):
    """
    An allergen model to represent food or drink allergens.

    :cvar id: the identifier of the allergen
    :cvar name: the name of the allergen
    :cvar menuitems: the associated menu items that contains the allergen
    """

    __tablename__ = "allergen"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String)

    menuitems: Mapped[Optional[List["MenuItem"]]] = relationship(back_populates="allergens",
                                                                 secondary="menuitem_allergen")

    def __repr__(self):
        return f'Allergen(id={self.id!r}, name={self.name!r})'


# the association table for the many-to-many relationship between menuitem and allergen
menuitem_allergen = db.Table(
    "menuitem_allergen",
    db.Column('menuitem', ForeignKey("menuitem.id"), primary_key=True),
    db.Column('allergen', ForeignKey("allergen.id"), primary_key=True)
)


class MenuItem(db.Model):
    """
    A data model for the object 'menu item', an item that can be displayed on a menu.

    :cvar id: the identifier of the menu item
    :cvar name: the name of the menu item
    :cvar description: the description of the menu item, which can be more detailed than its name
    :cvar calorie: the amount of energy the menu item contains in kcal
    :cvar price: the price of the menu item
    :cvar allergens: the list of allergens the menu item contains
    """
    __tablename__ = "menuitem"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String)
    description: Mapped[str] = mapped_column(String)
    calorie: Mapped[int] = mapped_column(Integer, CheckConstraint('calorie > 0'))
    price: Mapped[int] = mapped_column(Numeric(scale=2), CheckConstraint('price > 0'))
    menugroup_id: Mapped[int] = mapped_column(ForeignKey("menugroup.id"))

    allergens: Mapped[Optional[List["Allergen"]]] = relationship(back_populates="menuitems",
                                                                 secondary="menuitem_allergen")
    menugroup: Mapped["MenuGroup"] = relationship(back_populates="menuitems")

    def __repr__(self):
        return (f"MenuItem(id={self.id!r}, name={self.name!r}, description={self.description!r}, "
                f"calorie={self.calorie!r}, price={self.price!r}, menugroup_id="
                f"{self.menugroup_id!r})")


class MenuGroup(db.Model):
    """
    A data model represents the groups of a menu, such as 'Starter' of 'Food' menu,
    or 'Alcoholic' of 'Drink' menu

    :cvar id: the identifier of the menu group
    :cvar type: the type of the menu, such as 'Food' or 'Drink'
    :cvar category: the category of a type, such as 'Main' for Food Menu and 'Non-Alcoholic' for
    Drink Menu
    """
    __tablename__ = "menugroup"
    __table_args__ = (
        # A group that is a pair of type and category must be unique
        UniqueConstraint('type', 'category'),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    type: Mapped[MenuType] = mapped_column(Enum(MenuType))
    category: Mapped[MenuCategory] = mapped_column(Enum(MenuCategory))

    menuitems: Mapped[Optional[List["MenuItem"]]] = relationship(back_populates="menugroup")

    def __repr__(self):
        return f"MenuGroup(id={self.id!r}, type={self.type!r}, category={self.category!r})"


class Table(db.Model):
    """
    A data model represents restaurant tables.

    :cvar number: the table number
    """
    __tablename__ = "table"
    number: Mapped[int] = mapped_column(CheckConstraint('number > 0'), primary_key=True)


class Order(db.Model):
    """
    A data model represents an order that is made by a table.

    :cvar id: the identifier of the order
    :cvar status: the state of the order, including "Ordering", "Preparing", "Delivering",
    "Delivered" and "Finished"; defaults to "Ordering"
    :cvar confirmed_waiter: an indicator that whether the order is confirmed by a waiter
    :cvar confirmed_kitchen: an indicator that whether the order is confirmed by a kitchen staff
    """

    __tablename__ = "order"

    id: Mapped[int] = mapped_column(primary_key=True)
    status: Mapped[OrderStatus] = mapped_column(Enum(OrderStatus),
                                                default=OrderStatus.ORDERING)
    confirmed_waiter: Mapped[bool] = mapped_column(Boolean, default=False)
    confirmed_kitchen: Mapped[bool] = mapped_column(Boolean, default=False)
