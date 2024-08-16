import React from "react";
import { Grid } from "@mui/material";
import BotItem from "../BotItem/BotItem";
import axios from "axios";
import { BotItemApiModel } from "./models";
import { useState, useEffect } from "react";
import fetchBotsAPI from "../../apiCalls";

export default function Bots() {
  const [botItems, setBotItems] = useState<[BotItemApiModel]>([
    {
      id: 0,
      account_id: 0,
      is_enabled: false,
      type: "",
      name: "",
      created_at: "",
      updated_at: "",
      pairs: "",
      strategy: "",
      take_profit: 0,
      base_order_volume: 0,
      safety_order_volume: 0,
      max_safety_orders: 0,
      active_safety_orders_count: 0,
      safety_order_step_percentage: 0,
      martingale_volume_coefficient: 0,
      martingale_step_coefficient: 0,
      cooldown: 0,
      finished_deals_count: 0,
      finished_deals_profit_usd: 0,
      active_deals_usd_profit: 0,
    },
  ]);

  useEffect(() => {
    fetchBotsAPI({ setBots: setBotItems });
  }, []);

  return (
    <Grid container spacing={0} justifyContent="start">
      {botItems.map((bot) => {
        if (botItems[0].id !== 0) {
          return (
            <Grid
              item
              xs={3}
              key={bot.id}
              alignContent={"center"}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
            >
              <BotItem
                id={bot.id}
                name={bot.name}
                createdAt={bot.created_at}
                updatedAt={bot.updated_at}
                pair={bot.pairs}
                strategy={bot.strategy}
                targetProfit={bot.take_profit}
                baseOrderVolume={bot.base_order_volume}
                safetyOrderVolume={bot.safety_order_volume}
                safetyOrdersCount={bot.max_safety_orders}
                activeSafetyOrdersCount={bot.active_safety_orders_count}
                deviation={bot.safety_order_step_percentage}
                safetyOrderVolumeScale={bot.martingale_volume_coefficient}
                safetyOrderStepScale={bot.martingale_step_coefficient}
                cooldown={bot.cooldown}
                finishedDealsCount={bot.finished_deals_count}
                finishedDealsProfit={bot.finished_deals_profit_usd}
                activeDealsProfit={bot.active_deals_usd_profit}
                isEnabled={bot.is_enabled}
                setBotItems={setBotItems}
              />
            </Grid>
          );
        } else {
          return "";
        }
      })}
    </Grid>
  );
}
