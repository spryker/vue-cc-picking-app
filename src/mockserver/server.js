/* eslint-disable */
const mockserver = require("mockserver-node");
const HTTP_PORT = 1080;

mockserver.start_mockserver({
  serverPort: HTTP_PORT,
  verbose: true,
  trace: true,
});

console.log("started on port: " + HTTP_PORT);

// stop MockServer if Node exist abnormally
process.on("uncaughtException", function (err) {
  console.log(
    "uncaught exception - stopping node server: " + JSON.stringify(err)
  );
  mockserver.stop_mockserver();
  throw err;
});

// stop MockServer if Node exits normally
process.on("exit", function () {
  console.log("exit - stopping node server");
  mockserver.stop_mockserver();
});

// stop MockServer when Ctrl-C is used
process.on("SIGINT", function () {
  console.log("SIGINT - stopping node server");
  mockserver.stop_mockserver();
  process.exit(0);
});

// stop MockServer when a kill shell command is used
process.on("SIGTERM", function () {
  console.log("SIGTERM - stopping node server");
  mockserver.stop_mockserver();
  process.exit(0);
});
