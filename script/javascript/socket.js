// Create a new WebSocket object
const socket = new WebSocket("wss://127.0.0.1:64443/service/cryptapi", [], {
  origin: "localhost"
});
// Handle the open event
socket.onopen = (event) => {
  console.log("event :>> ", event);
  console.log("WebSocket connected!");
  socket.send("Hello Server!");
};


// Handle the close event
socket.onclose = (_event) => {
  console.log("WebSocket disconnected!");
};
