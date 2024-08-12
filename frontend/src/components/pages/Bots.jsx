import React from "react";
import { Grid } from "@mui/material";
import BotItem from "../BotItem";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Bots() {
  const baseURL = "http://127.0.0.1:8000/bots";
  const [botsData, setBotsData] = useState();

  const bots = [
    {
      name: "SOL/USDT long",
      strategy: "DCA Long Strategy",
      baseOrderVolume: "80",
      safetyOrderVolume: "160",
      targetProfit: 1,
      numberSafetyOrders: 15,
      safetyOrderStepScale: 1.5,
      safetyOrderVolumeScale: 1.12,
    },
    {
      name: "PEPE/USDT long",
      strategy: "DCA Long Strategy",
      baseOrderVolume: "80",
      safetyOrderVolume: "160",
      targetProfit: 1,
      numberSafetyOrders: 15,
      safetyOrderStepScale: 1.5,
      safetyOrderVolumeScale: 1.12,
    },
    {
      name: "JUP/USDT long",
      strategy: "DCA Long Strategy",
      baseOrderVolume: "80",
      safetyOrderVolume: "160",
      targetProfit: 1,
      numberSafetyOrders: 15,
      safetyOrderStepScale: 1.5,
      safetyOrderVolumeScale: 1.12,
    },
    {
      name: "BONK/USDT long",
      strategy: "DCA Long Strategy",
      baseOrderVolume: "80",
      safetyOrderVolume: "160",
      targetProfit: 1,
      numberSafetyOrders: 15,
      safetyOrderStepScale: 1.5,
      safetyOrderVolumeScale: 1.12,
    },
  ];
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setBotsData(response.data.bots);
    });
  }, []);

  console.log(botsData);

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
