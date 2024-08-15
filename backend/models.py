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


class BotUpdateModel(BaseModel):
    bot_id: int
    name: str
    pairs: list[str]
    base_order_volume: int
    safety_order_volume: int
    so_count: int
    deviation: float
    target_profit: int
    active_safety_orders_count: int
    so_step_coefficient: float
    so_volume_coefficient: float
    cooldown: int


class StrategyModel(BaseModel):
    strategy: str
    options: object


class CommasBotModel(BaseModel):
    bot_id: int
    name: str
    pairs: list[str]
    base_order_volume: int
    safety_order_volume: int
    max_safety_orders: int
    safety_order_step_percentage: float
    target_profit: int
    take_profit_type: str
    strategy_list: list[StrategyModel]
    active_safety_orders_count: int
    martingale_step_coefficient: float
    martingale_volume_coefficient: float
    cooldown: int
