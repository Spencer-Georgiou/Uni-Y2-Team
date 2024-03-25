"""
Testing payment apis.
"""

from src import services
from src.schema import PaymentSchema


class TestPayment():
    # A post to /api/payment with an order id should return the strip url."
    def test_create_payment(self, client, db, order_preparing):
        # when an order in db
        db.session.add(order_preparing)
        db.session.commit()

        # when a post request is sent
        request_json = {"id": order_preparing.id}
        response = client.post('/api/payment', json=request_json)
        assert response.status_code == 200
        assert "payment_url" in response.get_json()

    def test_invalid_order(self, client):
        # when no order in db

        # when a post request is sent
        request_json = {"id": -1}
        response = client.post('/api/payment', json=request_json)
        assert response.status_code == 404