import pytest

from src.models import MenuItem
from src.models import Order
from src.models import OrderMenuItemAssociation


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
