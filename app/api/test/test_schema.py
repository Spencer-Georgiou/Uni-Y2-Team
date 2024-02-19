from src.model import Allergen
from src.model import MenuGroup
from src.model import MenuItem
from src.schema import AllergenSchema
from src.schema import MenuGroupSchema
from src.schema import MenuItemSchema
from decimal import Decimal


class TestMenuGroupSchema:
    # A menu group with no menuitem returned by a query is serializable.
    def test_serialize_menugroup_no_menuitem(self, db):
        expected = {'category': 'Starter', 'menuitems': [], 'type': 'Food'}

        menugroup = MenuGroup(type="Food", category="Starter")
        db.session.add(menugroup)
        db.session.commit()
        quried_menugroup = db.session.query(MenuGroup).first()
        serialized_menugroup = MenuGroupSchema().dump(quried_menugroup)

        assert serialized_menugroup == expected


class TestAllergenSchema:
    # An allergen with no menuitem returned by a query is serializable.
    def test_serialize_allergen_no_menuitem(self, db):
        expected = {'menuitems': [], 'name': 'Gluten'}

        allergen = Allergen(name="Gluten")
        db.session.add(allergen)
        db.session.commit()
        quiried_allergen = db.session.query(Allergen).first()
        serialized_allergen = AllergenSchema().dump(quiried_allergen)

        assert serialized_allergen == expected


class TestMenuItemSchema:
    # A menuitem with no allergen returned by a query is serializable.
    def test_serialize_menuitem_no_allergen(self, db):
        expected = {'menugroup': {'type': 'Food', 'category': 'Starter'}, 'allergens': [],
                    'name': 'Tacos', 'description': 'Crispy tacos filled with cheese',
                    'calorie': 600, 'price': Decimal('5.00')}

        menugroup = MenuGroup(type="Food", category="Starter")
        menuitem = MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                            calorie=600, price=5.00, menugroup=menugroup)
        db.session.add(menuitem)
        db.session.add(menugroup)
        db.session.commit()
        quired_menuitem = db.session.query(MenuItem).first()
        serialized_menuitem = MenuItemSchema().dump(quired_menuitem)

        assert serialized_menuitem == expected

    def test_serilialize_menuitem_one_allergen(self, db):
        expected = {'menugroup': {'type': 'Food', 'category': 'Starter'},
                    'allergens': [{'name': 'Gluten'}], 'name': 'Tacos',
                    'description': 'Crispy tacos filled with cheese', 'calorie': 600,
                    'price': Decimal('5.00')}

        menugroup = MenuGroup(type="Food", category="Starter")
        allergen = Allergen(name="Gluten")
        menuitem = MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                            calorie=600, price=5.00, menugroup=menugroup)
        menuitem.allergens.append(allergen)
        db.session.add(allergen)
        db.session.add(menuitem)
        db.session.commit()

        quired_menuitem = db.session.query(MenuItem).first()
        serialised_menuitem = MenuItemSchema().dump(quired_menuitem)

        assert serialised_menuitem == expected
