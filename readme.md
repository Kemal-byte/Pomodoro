# Specifications about the app

This is a simple pomodoro app. It will be easy to use easy to track the number of hours.

## Features

- It will create a timer that finishes and starts automatically untill the number of sets are finished.
- Timer and rest duration will be customizable.
- Users can tag the timer so it can be used to show the detail progress using charts and pie charts.
- For backend I will use firebase.
- I want to include the spotify api to it but I am not sure??

## Problem and solution section

- When I was hovering over the position:fixed elements it didn't let me scroll, Solution was to add a new css property to position fixed elements,
  which is pointerEvents: "none"

import { useState } from 'react';

function Timer() {
const [timeLeft, setTimeLeft] = useState(0);
const [timerId, setTimerId] = useState(null);

const handleStart = () => {
// Set up a timer to decrement the time left by 1 every second
const newTimerId = setTimeout(() => {
setTimeLeft(timeLeft - 1);
}, 1000);

    // Save the timer ID so that we can clear the timer later
    setTimerId(newTimerId);

};

const handleStop = () => {
// Clear the timer using the saved timer ID
clearTimeout(timerId);
setTimerId(null);
};

return (
<div>
<div>Time left: {timeLeft}</div>
<button onClick={handleStart}>Start</button>
<button onClick={handleStop}>Stop</button>
</div>
);
}
