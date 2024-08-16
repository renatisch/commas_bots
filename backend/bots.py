from utils import generate_signature
import os, requests
from models import Bots, BotUpdateModel, CommasBotModel, StrategyModel
import json
import hmac, hashlib


def fetch_bots():
    # api_key = os.getenv("API_KEY")
    # secret = os.getenv("API_SECRET")
    # api_key = os.getenv("HOME_API_KEY")
    # secret = os.getenv("HOME_API_SECRET")
    api_key = os.getenv("OFFICE_API_KEY")
    secret = os.getenv("OFFICE_API_SECRET")
    base_endpoint = "https://api.3commas.io"
    endpoint = "/public/api/ver1/bots"
    url = base_endpoint + endpoint
    signature = generate_signature(endpoint=endpoint, secret=secret)
    headers = {"Apikey": api_key, "Signature": signature}
    rq = requests.get(url=url, headers=headers)
    print(rq.status_code)
    data = rq.json()
    bots = Bots(bots=data)
    return bots


def update_bot(bot: BotUpdateModel):
    print(bot.target_profit)
    bot_to_update = CommasBotModel(
        bot_id=bot.bot_id,
        name=bot.name,
        pairs=bot.pairs,
        base_order_volume=bot.base_order_volume,
        safety_order_volume=bot.safety_order_volume,
        max_safety_orders=bot.so_count,
        safety_order_step_percentage=bot.deviation,
        take_profit=bot.target_profit,
        take_profit_type="total",
        strategy_list=[StrategyModel(strategy="nonstop", options={})],
        active_safety_orders_count=bot.active_safety_orders_count,
        martingale_step_coefficient=bot.so_step_coefficient,
        martingale_volume_coefficient=bot.so_volume_coefficient,
        cooldown=bot.cooldown,
    )
    base_endpoint = "https://api.3commas.io"
    endpoint = f"/public/api/ver1/bots/{bot.bot_id}/update"
    url = base_endpoint + endpoint
    # api_key = os.getenv("API_KEY")
    # secret = os.getenv("API_SECRET")
    # api_key = os.getenv("HOME_API_KEY")
    # secret = os.getenv("HOME_API_SECRET")
    api_key = os.getenv("OFFICE_API_KEY")
    secret = os.getenv("OFFICE_API_SECRET")
    signature = generate_signature(
        endpoint=endpoint, secret=secret, data=json.dumps(bot_to_update.model_dump())
    )
    headers = {
        "Apikey": api_key,
        "Signature": signature,
    }
    rq = requests.patch(url=url, headers=headers, json=bot_to_update.model_dump())
    # print(rq.content)
