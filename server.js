// import http from 'http';
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Naglowek strony Node.js</h1>");
});

server.listen(3000, "127.0.0.1", () => console.log("Serwer: 127.0.0.1:3000"));
