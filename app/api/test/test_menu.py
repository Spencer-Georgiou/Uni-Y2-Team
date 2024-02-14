from src import menu

expected_result = {'menu': [{'allergen': 'None', 'available': 1, 'calories': 450, 'description': 'Marinated and grilled pork served in corn tortillas with pineapple and cilantro', 'dietary': 'None', 'item_id': 1, 'item_name': 'Tacos al Pastor', 'price': 9.99, 'type': 'Main Dish'}, {'allergen': 'Dairy', 'available': 1, 'calories': 550, 'description': 'Flour tortillas filled with cheese, grilled chicken, and vegetables', 'dietary': 'None', 'item_id': 2, 'item_name': 'Quesadillas', 'price': 8.49, 'type': 'Main Dish'}, {'allergen': 'None', 'available': 1, 'calories': 180, 'description': 'Freshly made avocado dip with tomatoes, onions, and lime juice', 'dietary': 'Vegan', 'item_id': 3, 'item_name': 'Guacamole', 'price': 5.99, 'type': 'Appetizer'}, {'allergen': 'Dairy', 'available': 1, 'calories': 600, 'description': 'Chicken enchiladas topped with green tomatillo sauce and melted cheese', 'dietary': 'None', 'item_id': 4, 'item_name': 'Enchiladas Verde', 'price': 10.99, 'type': 'Main Dish'}, {'allergen': 'None', 'available': 1, 'calories': 300, 'description': 'Deep-fried dough pastries coated in cinnamon sugar, served with chocolate dipping sauce', 'dietary': 'None', 'item_id': 5, 'item_name': 'Churros', 'price': 6.49, 'type': 'Dessert'}]}


class TestMenu:

    def test_get(self, client):
        response = client.get("/api/menu")
        assert response.status_code == 200

        # expected result won't change because local test DB is used (../test/database.db)
        assert response.get_json() == expected_result

