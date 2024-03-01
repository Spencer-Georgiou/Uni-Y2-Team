"""
Testing order apis.
"""


class TestOrder:
    # A post to "api/order" should create a new order.
    def test_post(self, client, db, table, menuitem):
        db.session.add_all([table, menuitem])
        db.session.commit()

        response = client.post("/api/order", json={
            "table_number": 10,
            "menuitem_associations": [{'menuitem_name': 'Tacos', 'quantity': 3}],
        })
        assert response.status_code == 200
