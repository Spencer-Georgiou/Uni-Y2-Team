"""
Testing order apis.
"""
from src import services
from src import models
from src.schema import OrderSchema


class TestOrder:
    # A post request to "api/order" should create a new order.
    def test_post_success(self, client, db, table, menuitem):
        db.session.add_all([table, menuitem])
        db.session.commit()

        # expected response body
        expected = {'confirmed_waiter': False, 'id': 1,
                    'menuitem_associations': [{'menuitem_name': 'Tacos', 'quantity': 3}],
                    'status': 'Preparing', 'table_number': 10}

        # when a post request is sent
        request_json = {
            "table_number": 10,
            "menuitem_associations": [{'menuitem_name': 'Tacos', 'quantity': 3}],
        }
        response = client.post("/api/order", json=request_json)

        # assert whether the response matches
        assert response.status_code == 200
        expected['time_created'] = response.get_json().get('time_created')
        assert response.get_json() == expected

    # A post request to "api/order" with invalid data should return a 422.
    def test_post_invalid_table_number(self, client, db, table, menuitem):
        # the valid table has number 10
        db.session.add_all([table, menuitem])
        db.session.commit()

        response = client.post("/api/order", json={
            "table_number": 4,
            "menuitem_associations": [{'menuitem_name': 'Tacos', 'quantity': 3}],
        })

        assert response.status_code == 422
        assert response.get_json()["message"] == services.Order.MSG_INCORRECT_POST_DATA

    # A delete request to "api/order?id=<order_id>" should delete the order with the order_id in
    # the database.
    def test_delete_success(self, client, db, order):
        # when an order in the database
        db.session.add(order)
        db.session.commit()

        # then send a delete request
        query = {"id": order.id}
        response = client.delete("/api/order", query_string=query)
        order_in_db = db.session.query(models.Order).get(order.id)

        # check the response is 204, and the instance is deleted from the database
        assert response.status_code == 204
        assert order_in_db is None

    # A delete request to "api/order?id=<order_id>" should give a 404 if the order does not exist.
    def test_delete_invalid_order_id(self, client, db, order):
        # when no order in the database
        # then send a delete request to delete a non-existing order
        query = {"id": order.id}
        response = client.delete("/api/order", query_string=query)

        # check the response is 404, and the instance is deleted from the database
        assert response.status_code == 404
        assert response.get_json()["message"] == services.Order.MSG_NO_SUCH_ORDER

    # A patch request to "api/order" should update the status of the order if the status is given.
    def test_update_order_status(self, client, db, order):
        # when order in the database
        db.session.add(order)
        db.session.commit()

        # then send a patch request to update the status of the order
        request_json = {
            "id": order.id,
            "status": models.Order.Status.DELIVERED.value
        }
        response = client.patch("/api/order", json=request_json)

        # check the response code is 200
        # expected response body
        expected_order = order
        expected_order.status = models.Order.Status.DELIVERED
        expected_json = OrderSchema().dump(expected_order)
        assert response.status_code == 200
        assert response.get_json() == expected_json
