"""
Testing order apis.
"""
from src.services import Order


class TestOrder:
    # A post to "api/order" should create a new order.
    def test_post_success(self, client, db, table, menuitem):
        db.session.add_all([table, menuitem])
        db.session.commit()

        # expected response body
        expected = {'confirmed_waiter': False, 'id': 1,
                    'menuitem_associations': [{'menuitem_name': 'Tacos', 'quantity': 3}],
                    'status': 'Ordering', 'table_number': 10}

        response = client.post("/api/order", json={
            "table_number": 10,
            "menuitem_associations": [{'menuitem_name': 'Tacos', 'quantity': 3}],
        })
        assert response.status_code == 200
        assert response.get_json() == expected

    def test_post_invalid_table_number(self, client, db, table, menuitem):
        # the valid table has number 10
        db.session.add_all([table, menuitem])
        db.session.commit()

        # # expected response body
        # expected = {'confirmed_kitchen': False, 'confirmed_waiter': False, 'id': 1,
        #             'menuitem_associations': [{'menuitem_name': 'Tacos', 'quantity': 3}],
        #             'status': 'Ordering', 'table_number': 10}

        response = client.post("/api/order", json={
            "table_number": 4,
            "menuitem_associations": [{'menuitem_name': 'Tacos', 'quantity': 3}],
        })

        assert response.status_code == 422
        assert response.get_json()["message"] == Order.MSG_INCORRECT_POST_DATA
