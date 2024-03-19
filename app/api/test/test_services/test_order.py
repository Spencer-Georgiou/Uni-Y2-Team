"""
Testing order apis.
"""
import copy

from src import services
from src import models
from src.schema import OrderSchema


class TestOrder:
    # A post request to "api/order" should create a new order.
    def test_post_success(self, client, db, table, menuitem):
        db.session.add_all([table, menuitem])
        db.session.commit()

        # expected response body
        expected = {'id': 1,
                    'menuitem_associations': [{'menuitem_name': 'Tacos', 'quantity': 3}],
                    'status': 'Confirming', 'table_number': 10, 'waiter': None}

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
        assert response.get_json()["message"] == services.Order.MSG_INCORRECT_DATA

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

        # check the response code is 200 and returned order has updated order status
        expected_order = copy.deepcopy(order)
        assert expected_order
        expected_order.status = models.Order.Status.DELIVERED
        expected_json = OrderSchema().dump(expected_order)
        assert response.status_code == 200
        assert response.get_json() == expected_json

    # A patch request to "api/order" should update the status of the order to "Preparing".
    def test_update_status_preparing(self, client, db, order):
        # when order in database
        db.session.add(order)
        db.session.commit()

        # then send a patch request to update the status
        request_json = {
            "id": order.id,
            "status": models.Order.Status.PREPARING.value
        }
        response = client.patch("/api/order", json=request_json)

        # check the response code is 200 and returned order has status to "Preparing"
        expected_order = copy.deepcopy(order)
        expected_json = OrderSchema().dump(expected_order)
        assert response.status_code == 200
        assert response.get_json() == expected_json

    # A patch request to "api/order" with no order id will return
    # a 422 code and appropriate error message
    def test_update_with_absent_order_id(self, client, order, db):
        # when order in database
        db.session.add(order)
        db.session.commit()

        # then send patch request without order_id
        request_json = {
            "status": models.Order.Status.PREPARING.value
        }
        response = client.patch("/api/order", json=request_json)

        # check the response code is 422
        assert response.status_code == 422
        assert response.get_json()["message"] == services.Order.MSG_INCORRECT_DATA

    # A patch request to "api/order" with an incorrect id will
    # return a 404 code and appropriate error message
    def test_update_with_incorrect_order_id(self, client, order, db):
        # when order in database
        db.session.add(order)
        db.session.commit()

        # then send patch request with incorrect order id
        request_json = {
            "id": 5,
            "status": models.Order.Status.DELIVERED.value
        }
        response = client.patch("/api/order", json=request_json)

        # check response code is 404
        assert response.status_code == 404
        assert response.get_json()["message"] == services.Order.MSG_NO_SUCH_ORDER

    # A get request to "api/order" should return the order with the given ID if it exists.
    def test_get_order_by_valid_id(self, client, db, order):
        # when an order in the database
        db.session.add(order)
        db.session.commit()

        # then send a get request with ID in query
        query = {"id": order.id}
        response = client.get("/api/order", query_string=query)

        # check whether the response contains the jsonified order
        expected = OrderSchema().dump(order)
        assert response.status_code == 200
        assert response.get_json() == expected

    # A get request to "api/order" should return a 404 if the order does not exist.
    def test_get_order_by_invalid_id(self, client, order):
        # when no order in the database
        # then send a get request to /api/order
        query = {"id": order.id}
        response = client.get("/api/order", query_string=query)

        # check whether the response is 404 indicating no such an order
        assert response.status_code == 404
        assert response.get_json()["message"] == services.Order.MSG_NO_SUCH_ORDER
