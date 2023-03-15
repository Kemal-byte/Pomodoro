# Specifications about the app

This is a simple pomodoro app. It will be easy to use easy to track the number of hours.

## Features

- It will create a timer that finishes and starts automatically untill the number of sets are finished.
- Timer and rest duration will be customizable.
- Users can tag the timer so it can be used to show the detail progress using charts and pie charts.
- For backend I will use firebase.
- I want to include the spotify api to it but I am not sure if it is necessary??

## Problem and solution section

- On the login modal, I can't focus on the don't have an account text using tab index
- When the user plays with the timer, it triggers popup on 0. It should only be populated after focus sessions.

- When I was hovering over the position:fixed elements it didn't let me scroll, Solution was to add a new css property to position fixed elements,
  which is pointerEvents: "none"

- URGENT: Currently when I login I can't update the useReducer state because I can't call
  hooks inside regular js file. [done]
- Date is 1 day off on Fri day it pushes the data to Sat.[done]

- SO far data write is finished. Now I need to retrive the data and visulize it.
- Timer doesn't continue when swtich to other tabs.
- When checking the graph or settings timer finished immediatelly.
