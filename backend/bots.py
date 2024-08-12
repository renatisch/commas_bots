from utils import generate_signature
import os, requests
from models import Bots


def fetch_bots():
    api_key = os.getenv("API_KEY")
    secret = os.getenv("API_SECRET")
    base_endpoint = "https://api.3commas.io"
    endpoint = "/public/api/ver1/bots"
    url = base_endpoint + endpoint
    signature = generate_signature(endpoint=endpoint, secret=secret)
    headers = {"Apikey": api_key, "Signature": signature}
    rq = requests.get(url=url, headers=headers)
    data = rq.json()
    bots = Bots(bots=data)
    return bots
