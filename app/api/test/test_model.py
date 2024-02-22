"""
Testing data models.
"""
from src.enum import MenuCategory
from src.enum import MenuType
from src.model import Allergen
from src.model import MenuGroup
from src.model import MenuItem
from src.model import Order
from src.model import Table
from src.model import User
from src.model import Session
from datetime import datetime
from .fixture_model import menugroup
from .fixture_model import allergen
from .fixture_model import menuitem
from .fixture_model import user
from .fixture_model import session


class TestUser:
    # An instance of a user object can be created and stored in the database.
    def test_create_user(self, db, user):
        db.session.add(user)
        db.session.commit()

    # A user can refer to its associated session.
    def test_relationship_session(self, db, user, session):
        db.session.add_all([user, session])
        db.session.commit()

        assert user.session is session


class TestSession:
    # An instance of a session object can be created and stored in the database.
    def test_create_session(self, db, session):
        db.session.add(session)
        db.session.commit()

    # A session can refer to its associated user.
    def test_relationship_user(self, db, user, session):
        db.session.add_all([user, session])
        db.session.commit()

        assert session.user is user


class TestAllergen:
    # An instance of an allergen object can be created and stored in the database.
    def test_create_allergen(self, db, allergen):
        db.session.add(allergen)
        db.session.commit()

    # An allergen can be associated with at least one menu item.
    def test_relationship_menuitem(self, db, menuitem, allergen):
        allergen.menuitems.append(menuitem)
        db.session.add(allergen)
        db.session.add(menuitem)
        db.session.commit()

        assert menuitem in allergen.menuitems


class TestMenuItem:
    # An instance of a MenuItem can be created then stored to the database.
    def test_create_menuitem(self, db, menuitem):
        db.session.add(menuitem)
        db.session.commit()

    # A menu item can have one allergen.
    def test_relationship_allergen(self, db, allergen, menuitem):
        menuitem.allergens.append(allergen)
        db.session.add_all([allergen, menuitem])
        db.session.commit()

        assert allergen in menuitem.allergens

    # A menu item can be associated with a menu group.
    def test_relationship_menugroup(self, db, menuitem, menugroup):
        db.session.add_all([menuitem, menugroup])
        db.session.commit()

        assert menuitem.menugroup is menugroup


class TestMenuGroup:
    # An instance of menu group can be created and stored in the database.
    def test_create_menugroup(self, db, menugroup):
        db.session.add(menugroup)
        db.session.commit()

    # A menu group can contain one menu item.
    def test_relationship_menuitem(self, db, menugroup, menuitem):
        db.session.add_all([menuitem, menugroup])
        db.session.commit()

        assert menuitem in menugroup.menuitems


class TestTable:
    # An instance of table can be created and stored in the database.
    def test_create_table(self, db):
        table = Table(number=10)
        db.session.add(table)
        db.session.commit()


class TestOrder:
    # An instance of order can be created and stored in the database.
    def test_create_order(self, db):
        order = Order()
        db.session.add(order)
        db.session.commit()
