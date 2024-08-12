import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";

type Props = {
  botName: string;
  strategy: string;
  baseOrderVolume: number;
  safetyOrderVolume: number;
  targetProfit: number;
  numberSafetyOrders: number;
  safetyOrderStepScale: number;
  safetyOrderVolumeScale: number;
};

export default function BotItem({
  botName,
  strategy,
  baseOrderVolume,
  safetyOrderVolume,
  targetProfit,
  numberSafetyOrders,
  safetyOrderStepScale,
  safetyOrderVolumeScale,
}: Props) {
  return (
    <Box
      height={216}
      width={330}
      my={4}
      gap={4}
      p={2}
      sx={{ border: "2px solid grey", backgroundColor: "white" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} display={"flex"} sx={{ verticalAlign: "center" }}>
          <SmartToyOutlinedIcon sx={{ height: 50, width: 50 }} />
          <Box>
            <Typography variant="subtitle1" marginLeft={2} fontWeight={600}>
              {botName}
            </Typography>
            <Typography variant="subtitle1" marginLeft={2}>
              {strategy}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ verticalAlign: "center" }}>
          <Box display={"flex"}>
            <Typography variant="body2" fontWeight={600}>
              Base Order:
            </Typography>
            <Typography variant="body2">{baseOrderVolume}</Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="body2" fontWeight={600}>
              Safety Order:
            </Typography>
            <Typography variant="body2">{safetyOrderVolume}</Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="body2" fontWeight={600}>
              Target profit:
            </Typography>
            <Typography variant="body2">{targetProfit}</Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="body2" fontWeight={600}>
              Safety orders number:
            </Typography>
            <Typography variant="body2">{numberSafetyOrders}</Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="body2" fontWeight={600}>
              Safety order step scale:
            </Typography>
            <Typography variant="body2">{safetyOrderStepScale}</Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="body2" fontWeight={600}>
              Safety order volume scale:
            </Typography>
            <Typography variant="body2">{safetyOrderVolumeScale}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
