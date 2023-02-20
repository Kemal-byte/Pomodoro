import React, { useEffect, useRef, useState } from "react";
import ToastifyNotification from "../utilities/popup";

const useTimer = (state, dispatch) => {
  const { NotifyError, NotifySuccess } = ToastifyNotification();
  const [timeLeft, setTimeLeft] = useState(state.timer * 60); // set initial timer value to 60 seconds
  const [onBreak, setOnBreak] = useState(false);
  const timerRef = useRef(null);
  // console.log("OnBreak : ", onBreak);

  useEffect(() => {
    setTimeLeft(state.timer * 60);
  }, [state.timer]);

  useEffect(() => {
    if (timeLeft === 0) {
      setOnBreak(!onBreak);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (onBreak) {
      NotifySuccess(true);
      setTimeLeft(state.break * 60);
    } else {
      if (state.started) {
        NotifySuccess(false);
        dispatch({ type: "numberOf_reps", payload: state.sets - 1 });
        setTimeLeft(state.timer * 60);
      }
    }
  }, [onBreak]);

  useEffect(() => {
    if (state.started === false || state.started === undefined) return;
    if (state.sets < 1) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 10);
    return () => clearInterval(timerRef.current);
  }, [state.started]);

  useEffect(() => {
    if (state.sets < 1) {
      clearInterval(timerRef.current);
      dispatch({ type: "numberOf_reps", payload: 1 });
      dispatch({ type: "started_timer", payload: false });
    }
  }, [state.sets]);

  const checkInputs = () => {
    let error = false;
    if (state.sets < 1 || state.sets > 60 || Number.isNaN(state.sets)) {
      NotifyError("Invalid Set input, pick between 1 and 60");
      error = true;
    }
    if (state.break < 0 || state.break > 60 || Number.isNaN(state.break)) {
      NotifyError("Invalid Break input, pick between 1 and 60");
      error = true;
    }
    if (state.timer === 0) {
      NotifyError("Timer must be greater than 0");
      error = true;
    }
    if (state.tags && state.tags.length > 14) {
      NotifyError("Tags must have less than 14 characters");
      error = true;
    }
    return error;
  };
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  const fomattedTime = `${minutes?.toString().padStart(2, "0")}:${seconds
    ?.toString()
    .padStart(2, "0")}`;
  return { fomattedTime, checkInputs, onBreak };
};

export default useTimer;

//Maybe write this in a useReducer function
