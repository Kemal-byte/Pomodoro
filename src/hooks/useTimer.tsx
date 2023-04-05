import React, { useEffect, useRef, useState } from "react";
import ToastifyNotification from "../utilities/popup";
import { writeTimerData } from "../../firebase/database";
import { globalUser } from "../../firebase/firebase";

type StateType = {
  timer: number;
  sets: number;
  tags: string;
  break: number;
  started: boolean;
};
type DispatchType = (arg0: { type: string; payload: number | boolean }) => void;
const useTimer = (state: StateType, dispatch: DispatchType) => {
  const { NotifyError, NotifySuccess } = ToastifyNotification();
  const [timeLeft, setTimeLeft] = useState(state.timer * 60); // set initial timer value to 60 seconds
  const [onBreak, setOnBreak] = useState(false);
  const timerRef = useRef(null);
  // const audio = new Audio("../assets/LockSound.mp3");

  const [a, setA] = useState({
    sets: 0,
    timer: 0,
    tag: "focus",
  });

  type storedType = {
    sets: number;
    timer: number;
    tag: string;
  };
  let storedData: storedType = {
    sets: 0,
    timer: 0,
    tag: "focus",
  };

  useEffect(() => {
    setTimeLeft(state.timer * 60);
  }, [state.timer]);

  useEffect(() => {
    storedData = {
      sets: state.sets,
      timer: state.timer,
      tag: state.tags,
    };
    setA(storedData);
  }, [state.started]);

  useEffect(() => {
    if (timeLeft === 0) {
      setOnBreak(!onBreak);
    }
    document.title = `${fomattedTime} left | My Pomodoro App`;
  }, [timeLeft]);

  useEffect(() => {
    if (onBreak) {
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
    if (timeLeft > 1) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [state.started]);

  /**
   * When the sets are over, it will stop the timer.
   * TODO: Add a function here so it can push it to the db with the stored data.
   */
  useEffect(() => {
    if (state.sets < 1) {
      clearInterval(timerRef.current);
      dispatch({ type: "numberOf_reps", payload: 1 });
      dispatch({ type: "started_timer", payload: false });
      if (globalUser) {
        writeTimerData(globalUser, a);
      }
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
