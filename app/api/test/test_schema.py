"""
Testing Schemas that can parse Data Model to json.
"""
from datetime import datetime
from decimal import Decimal

from src.models import Allergen
from src.models import MenuGroup
from src.models import MenuItem
from src.models import Order
from src.models import OrderMenuItemAssociation
from src.models import Waiter
from src.schema import AllergenSchema
from src.schema import MenuGroupSchema
from src.schema import MenuItemSchema
from src.schema import OrderMenuItemAssociationSchema
from src.schema import OrderSchema
from src.schema import SessionSchema


class TestSessionSchema:
    # A session of a user returned by a query is serializable.
    def test_serialize_session(self, db, waiter, session_for_waiter):
        # set expiration time to 2024-02-26 00:00
        session_for_waiter.expires = datetime(year=2024, month=2, day=26)
        expected = {'token': 'abcde', 'expires': '2024-02-26T00:00:00'}

        db.session.add_all([waiter, session_for_waiter])
        db.session.commit()
        queried_waiter = db.session.query(Waiter).first()
        retrieved_session = queried_waiter.session
        serialized_session = SessionSchema().dump(retrieved_session)

        assert serialized_session == expected


class TestMenuGroupSchema:
    # A menu group with no menuitem returned by a query is serializable.
    def test_serialize_menugroup_no_menuitem(self, db, menugroup):
        expected = {'category': 'Starter', 'menuitems': [], 'type': 'Food'}

        db.session.add(menugroup)
        db.session.commit()
        queried_menugroup = db.session.query(MenuGroup).first()
        serialized_menugroup = MenuGroupSchema().dump(queried_menugroup)

        assert serialized_menugroup == expected


class TestAllergenSchema:
    # An allergen with no menuitem returned by a query is serializable.
    def test_serialize_allergen_no_menuitem(self, db, allergen):
        expected = {'menuitems': [], 'name': 'Gluten'}

        db.session.add(allergen)
        db.session.commit()
        queried_allergen = db.session.query(Allergen).first()
        serialized_allergen = AllergenSchema().dump(queried_allergen)

        assert serialized_allergen == expected


class TestMenuItemSchema:
    # A menuitem with no allergen returned by a query is serializable.
    def test_serialize_menuitem_no_allergen(self, db, menugroup):
        expected = {'menugroup': {'type': 'Food', 'category': 'Starter'}, 'allergens': [],
                    'name': 'Tacos', 'description': 'Crispy tacos filled with cheese',
                    'calorie': 600, 'price': Decimal('5.00')}

        menuitem = MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                            calorie=600, price=5.00, menugroup=menugroup)
        db.session.add(menuitem)
        db.session.add(menugroup)
        db.session.commit()
        queried_menuitem = db.session.query(MenuItem).first()
        serialized_menuitem = MenuItemSchema().dump(queried_menuitem)

        assert serialized_menuitem == expected

    # A menuitem with one allergen returned by a query is serializable.
    def test_serialize_menuitem_one_allergen(self, db, menugroup):
        expected = {'menugroup': {'type': 'Food', 'category': 'Starter'},
                    'allergens': [{'name': 'Gluten'}], 'name': 'Tacos',
                    'description': 'Crispy tacos filled with cheese', 'calorie': 600,
                    'price': Decimal('5.00')}

        allergen = Allergen(name="Gluten")
        menuitem = MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                            calorie=600, price=5.00, menugroup=menugroup)
        menuitem.allergens.append(allergen)
        db.session.add(allergen)
        db.session.add(menuitem)
        db.session.commit()

        queried_menuitem = db.session.query(MenuItem).first()
        serialized_menuitem = MenuItemSchema().dump(queried_menuitem)

        assert serialized_menuitem == expected


class TestOrderMenuItemAssociationSchema:
    # An association between an order and menuitem returned by a query is serializable.
    def test_serialize_order_menuitem_association(self, db, order, menuitem):
        expected = {'menuitem_name': 'Tacos', 'order_id': 1, 'quantity': 3}
        order_menuitem_association = OrderMenuItemAssociation(order=order, menuitem=menuitem,
                                                              quantity=3)
        db.session.add(order_menuitem_association)
        db.session.commit()

        queried_order_menuitem_association = db.session.query(OrderMenuItemAssociation).first()
        serialized_order_menuitem_association = OrderMenuItemAssociationSchema().dump(
            queried_order_menuitem_association)
        assert serialized_order_menuitem_association == expected


class TestOrderSchema:
    # An order returned by a query is serializable.
    def test_serialize_order(self, db, order, menuitem):
        expected = {'status': 'Preparing',
                    'menuitem_associations': [{'menuitem_name': 'Tacos', 'quantity': 3}],
                    'table_number': 10, 'id': 1, 'confirmed_waiter': False}
        order.menuitem_associations.append(
            OrderMenuItemAssociation(menuitem=menuitem, quantity=3))
        db.session.add(order)
        db.session.commit()

        queried_order = db.session.query(Order).first()
        serialized_order = OrderSchema().dump(queried_order)
        assert serialized_order == expected
