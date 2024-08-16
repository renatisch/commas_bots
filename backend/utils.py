import hmac, hashlib


def generate_signature(endpoint: str, secret: str, data: str = None) -> str:
    encoded_key = str.encode(secret)
    message = str.encode(endpoint)
    if data:
        message = str.encode(endpoint + data)

    signature = hmac.new(encoded_key, message, hashlib.sha256).hexdigest()
    return signature
