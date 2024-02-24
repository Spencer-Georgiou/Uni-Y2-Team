"""
Module for Object-Relation models that maps objects to tables stored in a database.
"""
from datetime import datetime
from datetime import timedelta
import enum
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
from sqlalchemy import ForeignKeyConstraint
from sqlalchemy import PrimaryKeyConstraint
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship


class Base(DeclarativeBase):
    """
    A basic data model that derives object models.
    """
    pass


db = SQLAlchemy(model_class=Base)


class User(db.Model):
    """
    A user model to map user objects to a user table in a database. It is an abstract model,
    which can be inherited but not instantiated.

    :cvar username: the identifier of the user
    :cvar password: the array of string used to authenticate the user
    :cvar session: the session that the user has
    """

    class Role(enum.Enum):
        WAITER = "Waiter"
        KITCHEN = "Kitchen"

    __tablename__ = "user"
    __mapper_args__ = {
        "polymorphic_abstract": True,
        "polymorphic_on": "role",
    }

    username: Mapped[str] = mapped_column(String(32), primary_key=True)
    password: Mapped[str] = mapped_column(String(255))
    role: Mapped[Role] = mapped_column(Enum(Role))

    session: Mapped[Optional["Session"]] = relationship(back_populates="user")

    def __repr__(self) -> str:
        return f"{self.__class__.__name__}(username={self.username!r}, password={self.password!r})"


class Waiter(User):
    """
    A kitchen model inherited from User to represent kitchen staff.

    :cvar username: the identifier of the user who is a kitchen staff
    """
    __tablename__ = "waiter"
    __mapper_args__ = {
        "polymorphic_identity": User.Role.WAITER,
    }

    username: Mapped[int] = mapped_column(ForeignKey("user.username"), primary_key=True)


class Kitchen(User):
    """
    A kitchen model inherited from User to represent kitchen staff.

    :cvar username: the identifier of the user who is a kitchen staff
    """
    __tablename__ = "kitchen"
    __mapper_args__ = {
        "polymorphic_identity": User.Role.KITCHEN,
    }

    username: Mapped[int] = mapped_column(ForeignKey("user.username"), primary_key=True)


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

    :cvar name: the name of the allergen
    :cvar menuitems: the associated menu items that contains the allergen
    """

    __tablename__ = "allergen"

    name: Mapped[str] = mapped_column(String, primary_key=True)

    menuitems: Mapped[Optional[List["MenuItem"]]] = relationship(back_populates="allergens",
                                                                 secondary="menuitem_allergen")

    def __repr__(self):
        return f'Allergen(name={self.name!r})'


# the association table for the many-to-many relationship between menuitem and allergen
menuitem_allergen = db.Table(
    "menuitem_allergen",
    db.Column('menuitem', ForeignKey("menuitem.name"), primary_key=True),
    db.Column('allergen', ForeignKey("allergen.name"), primary_key=True)
)


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

        :cvar FOOD: the Food Menu
        :cvar DRINK: the Drink Menu
        """
        FOOD = "Food"
        DRINK = "Drink"

    class Category(enum.Enum):
        """
        An enum that is for the category of menus.

        :cvar STARTER: the starter meals
        :cvar MAIN: the main meals
        :cvar DESSERT: the dessert meals
        :cvar ALCOHOLIC: the alcoholic drink
        :cvar NONALCOHOLIC: the non-alcoholic drink
        """
        STARTER = "Starter"
        MAIN = "Main"
        DESSERT = "Dessert"
        ALCOHOLIC = "Alcoholic"
        NONALCOHOLIC = "Non-Alcoholic"

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


class MenuItem(db.Model):
    """
    A data model for the object 'menu item', an item that can be displayed on a menu.

    :cvar name: the name of the menu item
    :cvar description: the description of the menu item, which can be more detailed than its name
    :cvar calorie: the amount of energy the menu item contains in kcal
    :cvar price: the price of the menu item
    :cvar allergens: the list of allergens the menu item contains
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

    def __repr__(self):
        return (f"MenuItem(name={self.name!r}, description={self.description!r}, "
                f"calorie={self.calorie!r}, price={self.price!r})")


class Table(db.Model):
    """
    A data model represents restaurant tables.

    :cvar number: the table number
    :cvar orders: the orders associated with the table
    """
    __tablename__ = "table"
    number: Mapped[int] = mapped_column(CheckConstraint('number > 0'), primary_key=True)

    orders: Mapped[Optional[List["Order"]]] = relationship(back_populates="table")

    def __repr__(self):
        return (f"Table(number={self.number!r})")


class Order(db.Model):
    """
    A data model represents an order that is made by a table.

    :cvar id: the identifier of the order
    :cvar table_number: the table number assigned to the order
    :cvar status: the state of the order, including "Ordering", "Preparing", "Delivering",
    "Delivered" and "Finished"; defaults to "Ordering"
    :cvar confirmed_waiter: an indicator that whether the order is confirmed by a waiter
    :cvar confirmed_kitchen: an indicator that whether the order is confirmed by a kitchen staff
    :cvar table: the table associated with the order
    """

    class Status(enum.Enum):
        """
        An enum that stands for possible statuses of an order.

        :cvar ORDERING: a customer is making an order
        :cvar PREPARING: the kitchen is preparing for the order
        :cvar DELIVERING: the order is ready for a waiter to deliver
        :cvar DELIVERED: the order has been delivered
        :cvar FINISHED: the order is finished, i.e. the customer left the table
        """
        ORDERING = "Ordering"
        PREPARING = "Preparing"
        DELIVERING = "Delivering"
        DELIVERED = "Delivered"
        FINISHED = "Finished"

    __tablename__ = "order"

    id: Mapped[int] = mapped_column(primary_key=True)
    table_number: Mapped[int] = mapped_column(ForeignKey("table.number"))
    status: Mapped[Status] = mapped_column(Enum(Status), default=Status.ORDERING)
    confirmed_waiter: Mapped[bool] = mapped_column(Boolean, default=False)
    confirmed_kitchen: Mapped[bool] = mapped_column(Boolean, default=False)

    table: Mapped["Table"] = relationship(back_populates="orders")

    def __repr__(self):
        return (
            f"Order(id={self.id!r}, table_number={self.table_number!r}, status={self.status!r}, "
            f"confirmed_waiter="
            f"{self.confirmed_waiter!r}, confirmed_kitchen={self.confirmed_kitchen!r})")
