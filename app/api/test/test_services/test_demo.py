"""
Testing Demo class.
"""


class TestDemo:
    # The get request to '/api/demo' should be okay and return a message in json.
    def test_get(self, client):
        response = client.get("/api/demo")
        assert response.status_code == 200

        message = response.get_json().get("message")
        assert message == "I'm an api demo."
