import { Box, Slider } from "@mui/material";
import TimerContainer, { Timer, TimerStart } from "./index.styled";
import useTimer from "@/hooks/useTimer";
import sound from "@/assets/LockSound.mp3";

export default ({ state, dispatch }) => {
  const timerHook = useTimer(state, dispatch);
  const audio = new Audio(sound);

  const handleChange = (e: any) => {
    if (e !== null) {
      dispatch({ type: "setting_timer", payload: Number(e.target.value) });
    }
  };

  const handleStart = () => {
    audio.play();
    // console.log(timerHook.checkInputs());
    // if (!timerHook.checkInputs()) {
    //   dispatch({ type: "started_timer", payload: !state.started });
    // }
  };

  return (
    <TimerContainer>
      <Timer>{timerHook.fomattedTime}</Timer>
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
      <audio src="../../assets/LockedSound.mp3"></audio>
      <TimerStart onClick={handleStart}>
        {state.started ? "Pause" : "Start"}
      </TimerStart>
    </TimerContainer>
  );
};
