from src.model import Allergen
from src.model import MenuGroup
from src.schema import AllergenSchema
from src.schema import MenuGroupSchema


class TestMenuGroupSchema:
    # A menu group with no menuitem returned by a query is serializable.
    def test_serialize_menugroup_no_menuitem(self, db):
        expected = {'category': 'Starter', 'id': 1, 'menuitems': [], 'type': 'Food'}

        menugroup = MenuGroup(type="Food", category="Starter")
        db.session.add(menugroup)
        db.session.commit()
        quried_menugroup = db.session.query(MenuGroup).first()
        serialised_menugroup = MenuGroupSchema().dump(quried_menugroup)
        assert serialised_menugroup == expected


class TestAllergenSchema:
    # An allergen with no menuitem returned by a query is serializable.
    def test_serialise_allergen_no_menuitem(self, db):
        expected = {'id': 1, 'menuitems': [], 'name': 'Gluten'}

        allergen = Allergen(name="Gluten")
        db.session.add(allergen)
        db.session.commit()
        quiried_allergen = db.session.query(Allergen).first()
        serialised_allergen = AllergenSchema().dump(quiried_allergen)
        assert serialised_allergen == expected
