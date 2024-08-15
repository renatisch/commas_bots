import React, { useState } from "react";
import { Box, Grid, Typography, Chip, Paper, Button } from "@mui/material";
import DetailsTooltip from "./CustomTooltip";
import CustomDialog from "../CustomDialog";

type BotItemProps = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  pair: string;
  strategy: string;
  targetProfit: number;
  baseOrderVolume: number;
  safetyOrderVolume: number;
  safetyOrdersCount: number;
  activeSafetyOrdersCount: number;
  deviation: number;
  safetyOrderVolumeScale: number;
  safetyOrderStepScale: number;
  cooldown: number;
  finishedDealsCount: number;
  finishedDealsProfit: number;
  activeDealsProfit: number;
  isEnabled: boolean;
};

type ToolTipProps = {
  targetProfit: number;
  baseOrderVolume: number;
  safetyOrderVolume: number;
  safetyOrderStepScale: number;
  safetyOrderVolumeScale: number;
  safetyOrdersCount: number;
  deviation: number;
  cooldown: number;
  activeSafetyOrdersCount: number;
};

const TooltipData = ({
  targetProfit,
  baseOrderVolume,
  safetyOrderVolume,
  safetyOrdersCount,
  safetyOrderStepScale,
  safetyOrderVolumeScale,
  deviation,
  cooldown,
  activeSafetyOrdersCount,
}: ToolTipProps) => {
  return (
    <Box width={210} padding={1}>
      <Grid container>
        <Grid item xs={6} display={"flex"} justifyContent={"start"}>
          <Typography variant="caption" fontWeight={600}>
            Target profit:
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"end"}>
          <Typography variant="caption" fontWeight={600}>
            {targetProfit}%
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"start"}>
          <Typography variant="caption" fontWeight={600}>
            BO size:
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"end"}>
          <Typography variant="caption" fontWeight={600}>
            {baseOrderVolume} USDT
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"start"}>
          <Typography variant="caption" fontWeight={600}>
            SO size:
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"end"}>
          <Typography variant="caption" fontWeight={600}>
            {safetyOrderVolume} USDT
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"start"}>
          <Typography variant="caption" fontWeight={600}>
            SO step scale:
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"end"}>
          <Typography variant="caption" fontWeight={600}>
            x{safetyOrderStepScale}
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"start"}>
          <Typography variant="caption" fontWeight={600}>
            SO vol. scale:
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"end"}>
          <Typography variant="caption" fontWeight={600}>
            x{safetyOrderVolumeScale}
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"start"}>
          <Typography variant="caption" fontWeight={600}>
            Deviation %:
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"end"}>
          <Typography variant="caption" fontWeight={600}>
            {deviation}
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"start"}>
          <Typography variant="caption" fontWeight={600}>
            SO's number:
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"end"}>
          <Typography variant="caption" fontWeight={600}>
            {safetyOrdersCount}
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"start"}>
          <Typography variant="caption" fontWeight={600}>
            Cooldown:
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"end"}>
          <Typography variant="caption" fontWeight={600}>
            {cooldown} sec.
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"start"}>
          <Typography variant="caption" fontWeight={600}>
            Conc. SO's:
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"end"}>
          <Typography variant="caption" fontWeight={600}>
            {activeSafetyOrdersCount}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default function BotItem({
  id,
  name,
  createdAt,
  updatedAt,
  pair,
  strategy,
  targetProfit,
  baseOrderVolume,
  safetyOrderVolume,
  safetyOrdersCount,
  activeSafetyOrdersCount,
  deviation,
  safetyOrderVolumeScale,
  safetyOrderStepScale,
  cooldown,
  finishedDealsCount,
  finishedDealsProfit,
  activeDealsProfit,
  isEnabled,
}: BotItemProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  let coin = pair[0].split("_")[1];
  let dateDiff = new Date(Date.now()).getTime() - new Date(createdAt).getTime();
  let daysActive = Math.round(dateDiff / (1000 * 3600 * 24));

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  return (
    <Box
      width={330}
      my={4}
      gap={4}
      p={2}
      sx={{ border: "2px solid grey", backgroundColor: "white" }}
    >
      <Grid container spacing={2} paddingY={1}>
        <Grid item xs={9} display={"flex"} sx={{ verticalAlign: "center" }}>
          <img
            src={`https://public-cdn.3commas.io/coins/${coin}`}
            alt=""
            height={50}
            width={50}
          />
          <Box>
            <Typography variant="subtitle1" marginLeft={2} fontWeight={600}>
              {name}
            </Typography>
            <Chip
              label={strategy}
              sx={{
                marginLeft: 2,
                backgroundColor: "#e6f5f5",
                color: "#00a69a",
                textTransform: "uppercase",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box display={"flex"} justifyContent={"end"}>
            <Paper>
              <Chip
                label={isEnabled ? "On" : "Off"}
                sx={{
                  fontSize: 12,
                  backgroundColor: isEnabled ? "#e6f5f5" : "#e7596a",
                  color: isEnabled ? "#00a69a" : "white",
                  borderRadius: 0,
                  textTransform: "uppercase",
                }}
              />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ verticalAlign: "center" }}>
          <Box display={"flex"}>
            <Typography variant="body2" fontWeight={600}>
              Days active:&nbsp;
            </Typography>
            <Typography variant="body2">{daysActive}</Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="body2" fontWeight={600}>
              Completed deals:&nbsp;
            </Typography>
            <Typography variant="body2">{finishedDealsCount}</Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="body2" fontWeight={600}>
              Total allocation:&nbsp;
            </Typography>
            <Typography variant="body2">
              {baseOrderVolume + safetyOrderVolume * safetyOrdersCount}
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="body2" fontWeight={600}>
              Finished deals profit:&nbsp;
            </Typography>
            <Typography
              variant="body2"
              color={finishedDealsCount > 0 ? "#00a69a" : "#e7596a"}
            >
              {parseFloat(finishedDealsProfit.toString()).toFixed(2)}
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Typography variant="body2" fontWeight={600}>
              Active deals profit:&nbsp;
            </Typography>
            <Typography
              variant="body2"
              color={
                activeDealsProfit === 0
                  ? "#2e4150"
                  : activeDealsProfit > 0
                  ? "#00a69a"
                  : "#e7596a"
              }
            >
              {parseFloat(activeDealsProfit.toString()).toFixed(2)}
            </Typography>
          </Box>
          <DetailsTooltip
            placement="top-start"
            title={
              <React.Fragment>
                <TooltipData
                  targetProfit={targetProfit}
                  baseOrderVolume={baseOrderVolume}
                  safetyOrderVolume={safetyOrderVolume}
                  safetyOrderStepScale={safetyOrderStepScale}
                  safetyOrderVolumeScale={safetyOrderVolumeScale}
                  safetyOrdersCount={safetyOrdersCount}
                  deviation={deviation}
                  cooldown={cooldown}
                  activeSafetyOrdersCount={activeSafetyOrdersCount}
                />
              </React.Fragment>
            }
          >
            <Box display={"flex"}>
              <Typography
                variant="caption"
                fontWeight={600}
                sx={{ textDecoration: "dashed underline" }}
              >
                Details ?
              </Typography>
            </Box>
          </DetailsTooltip>
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Box justifyContent={"space-around"} display={"flex"}>
            <Button
              variant="outlined"
              sx={{ margin: 0.5 }}
              onClick={handleDialogOpen}
            >
              Edit
            </Button>
            {!isEnabled ? (
              <Button variant="outlined" disabled sx={{ margin: 0.5 }}>
                Stop
              </Button>
            ) : (
              <Button variant="outlined" sx={{ margin: 0.5 }}>
                Stop
              </Button>
            )}

            <Button variant="outlined" sx={{ margin: 0.5 }}>
              Delete
            </Button>
          </Box>
        </Grid>
        <CustomDialog
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          bot_id={id}
          name={name}
          createdAt={createdAt}
          updatedAt={updatedAt}
          pair={pair}
          strategy={strategy}
          targetProfit={targetProfit}
          baseOrderVolume={baseOrderVolume}
          safetyOrderVolume={safetyOrderVolume}
          safetyOrdersCount={safetyOrdersCount}
          activeSafetyOrdersCount={activeSafetyOrdersCount}
          deviation={deviation}
          safetyOrderVolumeScale={safetyOrderVolumeScale}
          safetyOrderStepScale={safetyOrderStepScale}
          cooldown={cooldown}
        />
      </Grid>
    </Box>
  );
}
