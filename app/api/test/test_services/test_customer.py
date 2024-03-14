"""
Testing customer apis.
"""
from src import models
from src.schema import CustomerSchema

class TestCustomer:
    # Test if the get response to the register API returns correct message and status code for each condition
    def test_unique(self, client, db, customer):
        requested_json = CustomerSchema(only=("username","password",)).dump(customer)
        response = client.post("/api/customer", json=requested_json)
        customer_in_db = db.session.query(models.Customer).get(customer.username)

        assert response.status_code == 200
        assert customer_in_db is not None

    def test_duplicate(self, client, db, customer):
        db.session.add(customer)
        db.session.commit()

        requested_json = CustomerSchema(only=("username","password",)).dump(customer)
        response = client.post("/api/customer", json=requested_json)

        assert response.status_code == 409
        assert response.json["message"] == "Customer already exists."