from pydantic import BaseModel
from typing import List


class Bot(BaseModel):
    id: int
    account_id: int
    is_enabled: bool
    type: str
    name: str
    created_at: str
    updated_at: str
    pairs: List[str]
    strategy: str
    take_profit: float
    base_order_volume: float
    safety_order_volume: float
    max_safety_orders: int
    active_safety_orders_count: int
    safety_order_step_percentage: float
    martingale_volume_coefficient: float
    martingale_step_coefficient: float
    cooldown: int
    finished_deals_count: int
    finished_deals_profit_usd: float
    active_deals_usd_profit: float


class Bots(BaseModel):
    bots: List[Bot]
