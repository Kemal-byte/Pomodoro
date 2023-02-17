import { Box, Slider } from "@mui/material";
import TimerContainer, { Timer, TimerStart } from "./index.styled";
import ToastifyNotification from "../../utilities/popup";
import { useEffect, useState } from "react";

export default ({ state, dispatch }) => {
  const { NotifyError, NotifySuccess } = ToastifyNotification();
  const [start, setStart] = useState(false);
  const [remainingTime, setRemainingTime] = useState(state.timer * 60);

  useEffect(() => {
    setRemainingTime(state.timer * 60);
  }, [state.timer]);

  useEffect(() => {
    if (!start) return;
    const intervalId = setInterval(() => {
      // console.log("ah");
      // dispatch({ type: "setting_timer", payload: state.timer - 1 });
      setRemainingTime((prev) => prev - 1);
      // console.log(remainingTime);
      console.log(start);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [start]);

  const handleChange = (e: any) => {
    if (e !== null) {
      dispatch({ type: "setting_timer", payload: Number(e.target.value) });
    }
  };
  const checkInputs = () => {
    if (state.sets < 1 || state.sets > 60 || Number.isNaN(state.sets)) {
      NotifyError("Invalid Set input, pick between 1 and 60");
      return;
    }
    if (state.break < 0 || state.break > 60 || Number.isNaN(state.break)) {
      NotifyError("Invalid Break input, pick between 1 and 60");
      return;
    }
    if (state.timer === 0) {
      NotifyError("Timer must be greater than 0");
      return;
    }
    if (state.tags && state.tags.length > 14) {
      NotifyError("Tags must have less than 14 characters");
      return;
    }
  };
  const handleStart = () => {
    console.log("Start Clickeds");
    console.log(state);
    checkInputs();
    setStart(!start);
  };
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const fomattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  return (
    <TimerContainer>
      {start || <Timer>{state.timer}:00</Timer>}
      {start && <Timer>{fomattedTime}</Timer>}

      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Small steps"
          value={state.timer}
          step={5}
          marks
          min={0}
          max={60}
          valueLabelDisplay="auto"
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <TimerStart onClick={handleStart}>{start ? "Pause" : "Start"}</TimerStart>
    </TimerContainer>
  );
};
