const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });
let messages = [];

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send chat history
  ws.send(JSON.stringify({ type: "history", data: messages }));

  ws.on("message", (msg) => {
    const message = JSON.parse(msg);
    messages.push(message);

    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: "message", data: message }));
      }
    });
  });

  ws.on("close", () => console.log("Client disconnected"));
});

console.log("WebSocket server running on ws://localhost:8080");
