import React from "react";
import { Grid } from "@mui/material";
import BotItem from "../BotItem/BotItem";

export default function Bots() {
  const bots = [
    {
      name: "SOL/USDT long",
      strategy: "DCA Long Strategy",
      baseOrderVolume: 80,
      safetyOrderVolume: 160,
      targetProfit: 1,
      numberSafetyOrders: 15,
      safetyOrderStepScale: 1.5,
      safetyOrderVolumeScale: 1.12,
    },
    {
      name: "PEPE/USDT long",
      strategy: "DCA Long Strategy",
      baseOrderVolume: 80,
      safetyOrderVolume: 160,
      targetProfit: 1,
      numberSafetyOrders: 15,
      safetyOrderStepScale: 1.5,
      safetyOrderVolumeScale: 1.12,
    },
    {
      name: "JUP/USDT long",
      strategy: "DCA Long Strategy",
      baseOrderVolume: 80,
      safetyOrderVolume: 160,
      targetProfit: 1,
      numberSafetyOrders: 15,
      safetyOrderStepScale: 1.5,
      safetyOrderVolumeScale: 1.12,
    },
    {
      name: "BONK/USDT long",
      strategy: "DCA Long Strategy",
      baseOrderVolume: 80,
      safetyOrderVolume: 160,
      targetProfit: 1,
      numberSafetyOrders: 15,
      safetyOrderStepScale: 1.5,
      safetyOrderVolumeScale: 1.12,
    },
  ];

  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      {bots.map((bot) => {
        return (
          <Grid
            item
            xs={3}
            key={bot.name}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <BotItem
              botName={bot.name}
              strategy={bot.strategy}
              baseOrderVolume={bot.baseOrderVolume}
              safetyOrderVolume={bot.safetyOrderVolume}
              targetProfit={bot.targetProfit}
              numberSafetyOrders={bot.numberSafetyOrders}
              safetyOrderStepScale={bot.safetyOrderStepScale}
              safetyOrderVolumeScale={bot.safetyOrderVolumeScale}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
