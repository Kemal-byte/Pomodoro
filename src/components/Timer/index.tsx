import { Box, Slider } from "@mui/material";
import React, { useState, useReducer } from "react";
import reducer, { initialState } from "../../reducer/reducer";
import TimerContainer, { Timer, TimerStart } from "./index.styled";
export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e !== null)
      dispatch({ type: "setting_timer", payload: Number(e.target.value) });
  };
  return (
    <TimerContainer>
      <Timer>{state.timer}:00</Timer>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Small steps"
          value={state.timer}
          step={5}
          marks
          min={0}
          max={60}
          valueLabelDisplay="auto"
          onChange={handleChange}
        />
      </Box>
      <TimerStart>Start</TimerStart>
    </TimerContainer>
  );
};
