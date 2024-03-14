from src.services import Available

class TestAvailable:
    # A PATCH to /api/menuitem should update available field.
    def test_update_success(self, client, db, menuitem):
        db.session.add_all([menuitem])
        db.session.commit()

        response = client.patch("/api/menuitem", json={
            "name": "Tacos",
            "available": False
        })
        assert response.status_code == 204
        assert menuitem.available is False


    # Useful error message should be returned when item name doesn't exist
    def test_invalid_name(self, client, db, menuitem):
        db.session.add_all([menuitem])
        db.session.commit()

        response = client.patch("/api/menuitem", json={
            "name": "does_not_exist",
            "available": False
        })
        assert response.status_code == 404
        assert response.get_json()["message"] == Available.MSG_NO_SUCH_MENUITEM
        

