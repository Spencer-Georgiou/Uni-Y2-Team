"""
Testing data models.
"""
from src.model import Allergen
from src.model import MenuGroup
from src.model import MenuItem
from src.model import Order
from src.model import Table
from src.model import User
from src.model import Session
from datetime import datetime

from src.model import Waiter
from .fixture_model import *


class TestSession:
    # An instance of a session object can be created and stored in the database.
    def test_create_session(self, db, session_for_waiter):
        db.session.add(session_for_waiter)
        db.session.commit()

    # A session can refer to its associated waiter.
    def test_relationship_user(self, db, waiter, session_for_waiter):
        db.session.add_all([waiter, session_for_waiter])
        db.session.commit()

        assert session_for_waiter.user is waiter


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
    def test_create_table(self, db, table):
        db.session.add(table)
        db.session.commit()

    # A table can be associated with many orders.
    def test_relationship_order(self, db, table, order):
        db.session.add_all([table, order])
        db.session.commit()

        assert order in table.orders

    # A table can show its active order.
    def test_show_active_order(self, db, table, active_order):
        db.session.add_all([table, active_order])
        db.session.commit()

        assert active_order is table.get_active_order()


class TestOrder:
    # An instance of order can be created and stored in the database.
    def test_create_order(self, db, order):
        db.session.add(order)
        db.session.commit()

    # An order must be associated with exactly one table.
    def test_relationship_table(self, db, table, order):
        db.session.add_all([table, order])
        db.session.commit()

        assert order.table is table


class TestWaiter:
    # An instance of kitchen can be created and stored in the database.
    def test_create_waiter(self, db, waiter):
        db.session.add(waiter)
        db.session.commit()

    # A kitchen can refer to its associated session.
    def test_relationship_session(self, db, waiter, session_for_waiter):
        db.session.add_all([waiter, session_for_waiter])
        db.session.commit()

        assert waiter.session is session_for_waiter


class TestKitchen:
    # An instance of kitchen staff can be created and stored in the database.
    def test_create_kitchen(self, db, kitchen):
        db.session.add(kitchen)
        db.session.commit()

    # A kitchen can refer to its associated session.
    def test_relationship_session(self, db, kitchen, session_for_kitchen):
        db.session.add_all([kitchen, session_for_kitchen])
        db.session.commit()

        assert kitchen.session is session_for_kitchen
