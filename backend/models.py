from pydantic import BaseModel
from typing import List


class Bot(BaseModel):
    id: int
    account_id: int
    is_enabled: bool
    pairs: list
    created_at: str
    updated_at: str
    base_order_volume: float
    safety_order_volume: float
    safety_order_step_percentage: float
    take_profit: float
    martingale_volume_coefficient: float
    martingale_step_coefficient: float
    max_safety_orders: int
    active_safety_orders_count: int


class Bots(BaseModel):
    bots: List[Bot]
