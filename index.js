// src/index.js
const http = require("http");

const PORT = process.env.PORT || 8080; // Ensure it matches the port in component.yaml

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Choreo!");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
