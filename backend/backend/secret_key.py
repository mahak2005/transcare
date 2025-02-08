import secrets

secret_key = secrets.token_hex(32)
print("Your SECRET_KEY:", secret_key)