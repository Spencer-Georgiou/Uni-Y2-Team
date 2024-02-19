"""
Testing menu apis.
"""
from src.model import Allergen
from src.model import MenuGroup
from src.model import MenuItem
from src.schema import MenuItemSchema


class TestMenu:
    # Test if the get response to the menu api returns a list of menu items.
    def test_get(self, client, db):
        menugroup = MenuGroup(type="Food", category="Starter")
        allergen = Allergen(name="Gluten")
        menuitem = MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                            calorie=600, price=5.00, menugroup=menugroup, allergens=[allergen])
        db.session.add_all([menugroup, allergen, menuitem])
        db.session.commit()

        expected = [MenuItemSchema().dump(menuitem)]

        response = client.get("/api/menu")
        assert response.status_code == 200
        assert response.get_json() == expected
