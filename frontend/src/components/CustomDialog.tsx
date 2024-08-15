import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Slider, Box, Grid, Input, Typography } from "@mui/material";

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
  const [boVolume, setBoVolume] = useState<string>(baseOrderVolume.toString());
  const [soVolume, setSoVolume] = useState<string>(
    safetyOrderVolume.toString()
  );
  const [targetProfitPercentage, setTargetProfitPercentage] = useState<string>(
    targetProfit.toString()
  );

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleSliderInputBlur = () => {
    if (Number(targetProfitPercentage) < 0) {
      let value = 0;
      setTargetProfitPercentage(value.toString());
    } else if (Number(targetProfitPercentage) > 100) {
      let value = 100;
      setTargetProfitPercentage(value.toString());
    }
  };

  return (
    <React.Fragment>
      <Dialog open={isDialogOpen} onClose={handleClose} fullWidth>
        <DialogTitle color={"#666666"}>Edit bot {name}</DialogTitle>
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
            onChange={(event) => {
              setBoVolume(event.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="SO volume"
            name="SO volume"
            label="Safety order volume"
            type="number"
            fullWidth
            variant="standard"
            value={soVolume}
            onChange={(event) => {
              setSoVolume(event.target.value);
            }}
          />
          <Box marginTop={1} display={"flex"} flexDirection={"column"}>
            <Typography id="input-slider" gutterBottom variant="caption">
              Target profit %
            </Typography>
            <Grid
              container
              marginTop={1}
              justifyContent={"start"}
              display={"flex"}
            >
              <Grid item xs={3} display="flex">
                <TextField
                  value={targetProfitPercentage}
                  size="small"
                  onChange={(event) => {
                    setTargetProfitPercentage(event.target.value);
                  }}
                  onBlur={handleSliderInputBlur}
                  inputProps={{
                    step: 0.5,
                    min: 0,
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
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  onChange={(event: any) => {
                    setTargetProfitPercentage(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
