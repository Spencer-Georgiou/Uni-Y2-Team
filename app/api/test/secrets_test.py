import secrets
# test to see if secrets module can generate a 16-byte (32-character) hexadecimal string
password_salt = secrets.token_hex(16)
print(password_salt)
