from src.services import Available

class TestLogin:
    # A PATCH to /api/menuitem/available should update available field.
    def test_update_success(self, client, db, menuitem):
        db.session.add_all([menuitem])
        db.session.commit()

        available_response = client.patch("/api/menuitem", json={
            "name": "Tacos",
            "available": "false"
        })

        menu_response = client.get("/api/menu")

        assert available_response.status_code == 200
        assert available_response.get_json()["error_message"] is None
        assert menu_response.get_json()[0]["available"] == False

    # Useful error message should be returned when item name doesn't exist
    def test_invalid_name(self, client, db, menuitem):
        db.session.add_all([menuitem])
        db.session.commit()

        response = client.patch("/api/menuitem", json={
            "name": "does_not_exist",
            "available": "false"
        })
        assert response.status_code == 400
        assert response.get_json()["error_message"] == "Menu item not found"
        

