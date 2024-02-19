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
        serialised_menugroup = MenuGroupSchema().dump(quried_menugroup)

        assert serialised_menugroup == expected


class TestAllergenSchema:
    # An allergen with no menuitem returned by a query is serializable.
    def test_serialise_allergen_no_menuitem(self, db):
        expected = {'menuitems': [], 'name': 'Gluten'}

        allergen = Allergen(name="Gluten")
        db.session.add(allergen)
        db.session.commit()
        quiried_allergen = db.session.query(Allergen).first()
        serialised_allergen = AllergenSchema().dump(quiried_allergen)

        assert serialised_allergen == expected


class TestMenuItemSchema:
    # A menuitem with no allergen returned by a query is serializable.
    def test_serialise_menuitem(self, db):
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
        serialised_menuitem = MenuItemSchema().dump(quired_menuitem)

        assert serialised_menuitem == expected
