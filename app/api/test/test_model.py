"""
Testing data models.
"""
from src.model import Allergen
from src.model import MenuGroup
from src.model import MenuItem
from src.model import Order
from src.model import OrderMenuItemAssociation
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

    # A table should return None if it does not have any active order.
    def test_no_active_order(self, db, table, inactive_order):
        db.session.add_all([table, inactive_order])
        db.session.commit()

        assert None is table.get_active_order()

    # An empty table should be available.
    def test_empty_table_available(self, db, table):
        db.session.add(table)
        db.session.commit()

        assert True is table.is_available()

    # A table with an active order should be unavailable.
    def test_occupied_table_available(self, db, table, active_order):
        db.session.add_all([table, active_order])
        db.session.commit()

        assert False is table.is_available()


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

    # An active order cannot be assigned to the table that already has one.
    def test_no_two_active_order_with_same_table(self, db, table, active_order):
        db.session.add_all([table, active_order])
        db.session.commit()

        with pytest.raises(ValueError) as exception:
            another_active_order = Order(table=table, status=Order.Status.ORDERING)

    # An order can add one menuitem as well as the quantity.
    def test_add_an_menuitem_association(self, db, order, menuitem):
        association = OrderMenuItemAssociation(menuitem=menuitem, quantity=2)
        order.menuitem_associations.append(association)
        db.session.add(order)
        db.session.commit()

    # An order can add multiple menuitems as well as their quantities.
    def test_add_menuitem_associations(self, db, order, menuitem, menugroup):
        # when we have two menuitems and two associations
        another_menuitem = MenuItem(name="Jalapeno Poppers", description="With cream cheese",
                                    calorie=450, price=3.50, menugroup=menugroup)
        association = OrderMenuItemAssociation(menuitem=menuitem, quantity=2)
        another_association = OrderMenuItemAssociation(menuitem=another_menuitem, quantity=4)

        # add them to the order in database
        order.menuitem_associations.extend([association, another_association])
        db.session.add(order)
        db.session.commit()


class TestCustomer:
    # An instance of customer can be created and stored in the database.
    def test_create_customer(self, db, customer):
        db.session.add(customer)
        db.session.commit()

    # A customer can refer to its associated session.
    def test_relationship_session(self, db, customer, session_for_customer):
        db.session.add_all([customer, session_for_customer])
        db.session.commit()

        assert customer.session is session_for_customer


class TestWaiter:
    # An instance of waiter can be created and stored in the database.
    def test_create_waiter(self, db, waiter):
        db.session.add(waiter)
        db.session.commit()

    # A waiter can refer to its associated session.
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


class TestOrderMenuItemAssociation:
    # An order-menuitem association can be created with an order ID and a menuitem name.
    def test_create_order_menuitem_association_with_key(self, db, menuitem, order):
        # when the database has an order and a menuitem
        db.session.add(order)
        db.session.add(menuitem)
        db.session.commit()

        order_menuitem_association = OrderMenuItemAssociation(order_id=order.id,
                                                              menuitem_name=menuitem.name,
                                                              quantity=2)
        db.session.add(order_menuitem_association)
        db.session.commit()

    # An order-menuitem association can be created with an order instance, and a menuitem instance.
    def test_create_order_menuitem_association_with_instance(self, db, menuitem, order):
        order_menuitem_association = OrderMenuItemAssociation(order=order,
                                                              menuitem=menuitem,
                                                              quantity=2)
        db.session.add(order_menuitem_association)
        db.session.commit()
