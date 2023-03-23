let intervalId = null;

self.addEventListener("message", (event) => {
  switch (event.data) {
    case "start":
      intervalId = setInterval(() => {
        self.postMessage("tick");
      }, 1000);
      break;
    case "stop":
      clearInterval(intervalId);
      break;
  }
});
