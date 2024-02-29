from src.models import OrderMenuItemAssociation
from src.models import OrderMenuItemAssociation


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
