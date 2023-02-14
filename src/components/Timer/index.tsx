import React from "react";
import TimerContainer, { Timer, TimerStart } from "./index.styled";
export default () => {
  return (
    <TimerContainer>
      <Timer>25:00</Timer>
      <TimerStart>Start</TimerStart>
    </TimerContainer>
  );
};
