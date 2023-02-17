import { Box, Slider } from "@mui/material";
import TimerContainer, { Timer, TimerStart } from "./index.styled";
import ToastifyNotification from "../../utilities/popup";
import { useEffect, useState } from "react";

export default ({ state, dispatch }) => {
  const { NotifyError, NotifySuccess } = ToastifyNotification();
  const [start, setStart] = useState(false);
  const [remainingTime, setRemainingTime] = useState(state.timer * 60);
  console.log(state);
  /**
   * After the state timer has changed we update our state.
   * setState is Async call so it was following one step back.
   * This fixes it.
   */
  useEffect(() => {
    setRemainingTime(state.timer * 60);
  }, [state.timer]);

  /**
   * Starts the timer and clears the setTimer on pause.
   */
  useEffect(() => {
    if (!state.started) return;
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
      console.log(state.started);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [state.started]);

  /**
   * A function that changes the timer in useReducer by using dispatch
   * @param e
   */
  const handleChange = (e: any) => {
    if (e !== null) {
      dispatch({ type: "setting_timer", payload: Number(e.target.value) });
    }
  };
  /**
   * Value checker of the timer before starting the timer
   * @function checkInputs
   * @returns {void}
   */
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
  /**
   * Toggles start state.
   * Before toggling the setState it call input checker function.
   * @see {@link checkInputs}
   */
  const handleStart = () => {
    console.log("Start Clickeds");
    console.log(state);
    checkInputs();
    dispatch({ type: "started_timer", payload: !state.started });
    // setStart(!start);
  };
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const fomattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  return (
    <TimerContainer>
      <Timer>{fomattedTime}</Timer>
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
      <TimerStart onClick={handleStart}>
        {state.started ? "Pause" : "Start"}
      </TimerStart>
    </TimerContainer>
  );
};
