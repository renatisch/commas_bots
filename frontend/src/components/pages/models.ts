type BotItemApiModel = {
  id: number;
  account_id: number;
  is_enabled: boolean;
  type: string;
  name: string;
  created_at: string;
  updated_at: string;
  pairs: string;
  strategy: string;
  take_profit: number;
  base_order_volume: number;
  safety_order_volume: number;
  max_safety_orders: number;
  active_safety_orders_count: number;
  safety_order_step_percentage: number;
  martingale_volume_coefficient: number;
  martingale_step_coefficient: number;
  cooldown: number;
  finished_deals_count: number;
  finished_deals_profit_usd: number;
  active_deals_usd_profit: number;
};

export type { BotItemApiModel };
