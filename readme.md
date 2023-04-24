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
- When build dist folder was upload to the gh-pages subtree it wasn't working. It showed an empty page. To fix it I wrote the base: './' in the vite.confige.tes file. That fixed the problem.
- When I was hovering over the position:fixed elements it didn't let me scroll, Solution was to add a new css property to position fixed elements,
  which is pointerEvents: "none"

- URGENT: Currently when I login I can't update the useReducer state because I can't call
  hooks inside regular js file. [done]
- Date is 1 day off on Fri day it pushes the data to Sat.[done]

- SO far data write is finished. Now I need to retrive the data and visulize it.[done]
- Timer doesn't continue when swtich to other tabs.[done]
- When checking the graph or settings timer finished immediatelly.
- Currently for the pie chart, the refined data isn't immediately available, it appears after the ui is loaded,
  so I can't see the results. But after refresing the piechart.tsx, the chart appears correctly.[done]
- When writing the data I don't have a yearly categories section.[done]
- There are 3 component for each options, it should be only one.[done]
- No way to add custom tags.[done]
- Sound hasn't added yet[done]
- Pie chart legends hasn't added yet[done]
- Custom color selection hasn't added yet
- Custom sound selection.
