import pytest

from src.models import MenuItem
from src.models import Order
from src.models import OrderMenuItemAssociation
from src.models import Table
from sqlalchemy.exc import IntegrityError


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

    # An order raises an IntegrityError when the table number does not exist.
    def test_relationship_incorrect_table_number(self, db):
        invalid_table_number = 200
        with pytest.raises(IntegrityError) as exception:
            invalid_order = Order(table_number=invalid_table_number)
            db.session.add(invalid_order)
            db.session.commit()

    # An order raises an IntegrityError when the menuitem associations contains a menuitem,
    # which name does not exist in the database.
    def test_relationship_incorrect_menuitem_associations(self, db, table, menuitem):
        invalid_menu_item = menuitem
        with pytest.raises(IntegrityError) as exception:
            invalid_order = Order(table_number=table.number, menuitem_associations=[
                OrderMenuItemAssociation(menuitem_name=invalid_menu_item.name, quantity=3)])

            # not log the menuitem to the database
            db.session.add_all([invalid_order, table])
            db.session.commit()

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
