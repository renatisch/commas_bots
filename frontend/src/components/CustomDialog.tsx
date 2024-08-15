import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useEffect } from "react";
import { Slider, Box, Grid, Typography, Alert } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";

type CustomDialogProps = {
  isDialogOpen: boolean;
  setIsDialogOpen: Function;
  bot_id: number;
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
};

export default function CustomDialog({
  isDialogOpen,
  setIsDialogOpen,
  bot_id,
  name,
  pair,
  targetProfit,
  baseOrderVolume,
  safetyOrderVolume,
  safetyOrdersCount,
  activeSafetyOrdersCount,
  deviation,
  safetyOrderVolumeScale,
  safetyOrderStepScale,
  cooldown,
}: CustomDialogProps) {
  // transition states
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isBotUpdated, setIsBotUpdated] = useState<boolean>(false);

  // bot config value states
  const [boVolume, setBoVolume] = useState<string>(baseOrderVolume.toString());
  const [soVolume, setSoVolume] = useState<string>(
    safetyOrderVolume.toString()
  );
  const [priceDeviation, setPriceDeviation] = useState<string>(
    deviation.toString()
  );
  const [soCount, setSoCount] = useState<string>(safetyOrdersCount.toString());
  const [targetProfitPercentage, setTargetProfitPercentage] = useState<string>(
    targetProfit.toString()
  );
  const [activeSOCount, setactiveSoCount] = useState<string>(
    activeSafetyOrdersCount.toString()
  );
  const [soStepScale, setSoStepScale] = useState<string>(
    safetyOrderStepScale.toString()
  );
  const [soVolumeScale, setSoVolumeScale] = useState<string>(
    safetyOrderVolumeScale.toString()
  );
  const [botCooldown, setBotCooldown] = useState<string>(cooldown.toString());

  // error states
  const [boVolumeError, setBoVolumeError] = useState(false);
  const [soVolumeError, setSoVolumeError] = useState(false);
  const [targetProfitValueError, setTargetProfitValueError] = useState(false);
  const [priceDeviationError, setPriceDeviationError] = useState(false);
  const [soCountError, setSoCountError] = useState(false);
  const [activeSoCountError, setActiveSoCountError] = useState(false);
  const [soStepScaleError, setSoStepScaleError] = useState(false);
  const [soVolumeScaleError, setSoVolumeScaleError] = useState(false);

  useEffect(() => {}, [soCount]);
  const resetDefaults = () => {
    setBoVolume(baseOrderVolume.toString());
    setSoVolume(safetyOrderVolume.toString());
    setSoCount(safetyOrdersCount.toString());
    setPriceDeviation(deviation.toString());
    setTargetProfitPercentage(targetProfit.toString());
    setactiveSoCount(activeSafetyOrdersCount.toString());
    setSoStepScale(safetyOrderStepScale.toString());
    setSoVolumeScale(safetyOrderVolumeScale.toString());
    setBotCooldown(cooldown.toString());
    setBoVolumeError(false);
    setSoVolumeError(false);
    setTargetProfitValueError(false);
    setPriceDeviationError(false);
    setSoCountError(false);
    setActiveSoCountError(false);
    setSoStepScaleError(false);
    setSoVolumeScaleError(false);
  };

  const handleBoVolumeChange = (event: any) => {
    let volume = event.target.value;
    if (Number(volume) > 0) {
      setBoVolume(volume);
      setBoVolumeError(false);
    } else {
      setBoVolume(volume);
      setBoVolumeError(true);
    }
  };

  const handleSoVolumeChange = (event: any) => {
    let volume = event.target.value;
    if (Number(volume) > 0) {
      setSoVolume(volume);
      setSoVolumeError(false);
    } else {
      setSoVolume(volume);
      setSoVolumeError(true);
    }
  };

  const handlePriceDeviationChange = (event: any) => {
    let count = event.target.value;
    if (Number(count) < 0.2) {
      setPriceDeviation(count);
      setPriceDeviationError(true);
    } else {
      setPriceDeviation(count);
      setPriceDeviationError(false);
    }
  };

  const handleTargetProfitChange = (event: any) => {
    let value = event.target.value;
    if (Number(value) < 0) {
      let value = 0;
      setTargetProfitPercentage(value.toString());
      setTargetProfitValueError(false);
    } else if (Number(value) > 100) {
      let value = 100;
      setTargetProfitPercentage(value.toString());
      setTargetProfitValueError(true);
    } else {
      setTargetProfitPercentage(value.toString());
      setTargetProfitValueError(false);
    }
  };

  const handleSoCountChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let count = event.target.value;
    if (Number(count) > 0) {
      setSoCount(count);
      setSoCountError(false);
    } else {
      setSoCount(count);
      setSoCountError(true);
    }
  };

  const handleActiveSoCountChange = (event: any) => {
    let count = event.target.value;
    if (Number(count) > Number(soCount)) {
      setactiveSoCount(soCount);
      setActiveSoCountError(true);
    } else if (Number(count) < 1) {
      setactiveSoCount(count.toString());
      setActiveSoCountError(true);
    } else {
      setactiveSoCount(count);
      setActiveSoCountError(false);
    }
  };

  const handleSoStepScaleChange = (event: any) => {
    let count = event.target.value;
    if (Number(count) > 10) {
      setSoStepScale(count);
      setSoStepScaleError(true);
    } else {
      setSoStepScale(count);
      setSoStepScaleError(false);
    }
  };
  const handleSoVolumeScaleChange = (event: any) => {
    let count = event.target.value;
    if (Number(count) > 10) {
      setSoVolumeScale(count);
      setSoVolumeScaleError(true);
    } else {
      setSoVolumeScale(count);
      setSoVolumeScaleError(false);
    }
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    resetDefaults();
  };

  const handleSubmit = () => {
    setIsLoading(true);
    let endpoint = "http://127.0.0.1:8000/bots/update";
    let payload = {
      bot_id: bot_id,
      name: name,
      pairs: pair,
      base_order_volume: boVolume,
      safety_order_volume: soVolume,
      so_count: soCount,
      deviation: priceDeviation,
      target_profit: targetProfit,
      active_safety_orders_count: activeSOCount,
      so_step_coefficient: soStepScale,
      so_volume_coefficient: soVolumeScale,
      cooldown: botCooldown,
    };
    axios({
      method: "patch",
      url: endpoint,
      data: payload,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setTimeout(() => {
            setIsLoading(false);
            setIsBotUpdated(true);
            setTimeout(() => {
              setIsDialogOpen(false);
              resetDefaults();
              setTimeout(() => {
                setIsBotUpdated(false);
              }, 1000);
            }, 2000);
          }, 2000);
        }
      })
      .catch((error) => {
        console.error(error.response.data.detail);
      });
  };
  return (
    <React.Fragment>
      <Dialog open={isDialogOpen} onClose={handleClose} fullWidth>
        {isLoading && <LinearProgress sx={{ height: 5 }} />}
        <DialogTitle color={"#666666"}>Edit bot {name}</DialogTitle>
        {isBotUpdated ? (
          <>
            <DialogContent sx={{ height: 100 }}>
              <Alert sx={{ backgroundColor: "#e6f5f5" }}>
                Bot has been updated.
              </Alert>
            </DialogContent>
          </>
        ) : (
          <>
            <DialogContent>
              <DialogContentText>Update bot configuration</DialogContentText>
              <TextField
                required
                margin="dense"
                id="BO volume"
                name="BO volume"
                label="Base order volume"
                type="number"
                fullWidth
                variant="standard"
                value={boVolume}
                error={boVolumeError ? true : false}
                helperText={boVolumeError ? "Cannot be lower than 1" : ""}
                onChange={handleBoVolumeChange}
              />
              <TextField
                required
                margin="dense"
                id="SO volume"
                name="SO volume"
                label="Safety order volume"
                type="number"
                fullWidth
                error={soVolumeError ? true : false}
                helperText={soVolumeError ? "Cannot be lower than 1" : ""}
                variant="standard"
                value={soVolume}
                onChange={handleSoVolumeChange}
              />
              <TextField
                required
                margin="dense"
                id="SO count"
                name="SO count"
                label="Safety orders count"
                type="number"
                error={soCountError ? true : false}
                helperText={soCountError ? "Cannot be lower than 1" : ""}
                fullWidth
                variant="standard"
                value={soCount}
                onChange={handleSoCountChange}
              />
              <Box marginTop={1} display={"flex"} flexDirection={"column"}>
                <Typography id="input-slider" gutterBottom variant="caption">
                  Price deviation to open safety orders (% from initial order)
                </Typography>
                <Grid container justifyContent={"start"} display={"flex"}>
                  <Grid item xs={3} display="flex">
                    <TextField
                      value={priceDeviation}
                      size="small"
                      onChange={handlePriceDeviationChange}
                      error={priceDeviationError ? true : false}
                      helperText={
                        priceDeviationError ? "Must be greater than 0.2" : false
                      }
                      FormHelperTextProps={{
                        sx: {
                          fontSize: 10,
                          justifyContent: "start",
                          margin: 0,
                        },
                      }}
                      sx={{ width: 90 }}
                      inputProps={{
                        step: 0.01,
                        min: 0,
                        max: 10,
                        type: "number",
                        "aria-labelledby": "input-slider",
                      }}
                    />
                  </Grid>
                  <Grid item xs={9} display={"flex"} alignItems={"center"}>
                    <Slider
                      size="small"
                      value={Number(priceDeviation)}
                      step={0.01}
                      max={10}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      onChange={handlePriceDeviationChange}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box marginTop={1} display={"flex"} flexDirection={"column"}>
                <Typography id="input-slider" gutterBottom variant="caption">
                  Target profit %
                </Typography>
                <Grid container justifyContent={"start"} display={"flex"}>
                  <Grid item xs={3} display="flex">
                    <TextField
                      value={targetProfitPercentage}
                      size="small"
                      error={targetProfitValueError ? true : false}
                      onChange={handleTargetProfitChange}
                      onBlur={handleTargetProfitChange}
                      inputProps={{
                        step: 0.5,
                        min: 0.05,
                        max: 100,
                        type: "number",
                        "aria-labelledby": "input-slider",
                      }}
                    />
                  </Grid>
                  <Grid item xs={9} display={"flex"} alignItems={"center"}>
                    <Slider
                      size="small"
                      defaultValue={1}
                      value={Number(targetProfitPercentage)}
                      step={0.05}
                      min={0.05}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      onChange={handleTargetProfitChange}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box marginTop={1} display={"flex"} flexDirection={"column"}>
                <Typography id="input-slider" gutterBottom variant="caption">
                  Active SO number
                </Typography>
                <Grid container justifyContent={"start"} display={"flex"}>
                  <Grid item xs={3} display="flex">
                    <TextField
                      value={activeSOCount}
                      size="small"
                      onChange={handleActiveSoCountChange}
                      error={activeSoCountError ? true : false}
                      sx={{ width: 90 }}
                      inputProps={{
                        step: 1,
                        min: 1,
                        max: soCount,
                        type: "number",
                        "aria-labelledby": "input-slider",
                      }}
                    />
                  </Grid>
                  <Grid item xs={9} display={"flex"} alignItems={"center"}>
                    <Slider
                      size="small"
                      defaultValue={1}
                      value={Number(activeSOCount)}
                      step={1}
                      min={1}
                      max={Number(soCount)}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      onChange={handleActiveSoCountChange}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box marginTop={1} display={"flex"} flexDirection={"column"}>
                <Typography id="input-slider" gutterBottom variant="caption">
                  SO step scale
                </Typography>
                <Grid container justifyContent={"start"} display={"flex"}>
                  <Grid item xs={3} display="flex">
                    <TextField
                      value={soStepScale}
                      size="small"
                      onChange={handleSoStepScaleChange}
                      error={soStepScaleError ? true : false}
                      helperText={
                        soStepScaleError ? "Must be less or equal to 10" : ""
                      }
                      FormHelperTextProps={{
                        sx: {
                          fontSize: 10,
                          justifyContent: "start",
                          margin: 0,
                        },
                      }}
                      sx={{ width: 90 }}
                      inputProps={{
                        step: 0.01,
                        min: 0,
                        max: soCount,
                        type: "number",
                        "aria-labelledby": "input-slider",
                      }}
                    />
                  </Grid>
                  <Grid item xs={9} display={"flex"} alignItems={"center"}>
                    <Slider
                      size="small"
                      value={Number(soStepScale)}
                      step={0.01}
                      max={10}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      onChange={handleSoStepScaleChange}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box marginTop={1} display={"flex"} flexDirection={"column"}>
                <Typography id="input-slider" gutterBottom variant="caption">
                  SO volume scale
                </Typography>
                <Grid container justifyContent={"start"} display={"flex"}>
                  <Grid item xs={3} display="flex">
                    <TextField
                      value={soVolumeScale}
                      size="small"
                      onChange={handleSoVolumeScaleChange}
                      error={soVolumeScaleError ? true : false}
                      helperText={
                        soVolumeScaleError
                          ? "Must be less or equal to 10"
                          : false
                      }
                      FormHelperTextProps={{
                        sx: {
                          fontSize: 10,
                          justifyContent: "start",
                          margin: 0,
                        },
                      }}
                      sx={{ width: 90 }}
                      inputProps={{
                        step: 0.01,
                        min: 0,
                        max: 10,
                        type: "number",
                        "aria-labelledby": "input-slider",
                      }}
                    />
                  </Grid>
                  <Grid item xs={9} display={"flex"} alignItems={"center"}>
                    <Slider
                      size="small"
                      value={Number(soVolumeScale)}
                      step={0.01}
                      max={10}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      onChange={handleSoVolumeScaleChange}
                    />
                  </Grid>
                </Grid>
              </Box>
              <TextField
                required
                margin="dense"
                id="cooldown"
                name="Cooldown"
                label="Cooldown (seconds)"
                type="number"
                fullWidth
                variant="standard"
                value={botCooldown}
                onChange={(event) => {
                  setBotCooldown(event.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" onClick={handleSubmit}>
                Save
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </React.Fragment>
  );
}
