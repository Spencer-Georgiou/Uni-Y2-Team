import hashlib


def hash_pass(password):
    pass_bytes = password.encode("utf-8")
    salt_bytes = "team27secretsalt".encode("utf-8")
    return hashlib.sha256(pass_bytes + salt_bytes).hexdigest()
