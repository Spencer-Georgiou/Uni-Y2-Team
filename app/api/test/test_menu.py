"""
Testing menu apis.
"""
from src.model import Allergen
from src.model import MenuGroup
from src.model import MenuItem
from src.schema import MenuItemSchema
from .fixture_model import menugroup
from .fixture_model import menuitem
from .fixture_model import allergen


class TestMenu:
    # Test if the get response to the menu api returns a list of menu items.
    def test_get(self, client, db, menugroup, allergen, menuitem):
        db.session.add_all([menugroup, allergen, menuitem])
        db.session.commit()

        expected = [MenuItemSchema().dump(menuitem)]

        response = client.get("/api/menu")
        assert response.status_code == 200
        assert response.get_json() == expected
