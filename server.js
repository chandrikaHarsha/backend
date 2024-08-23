const http = require("node:http");
const hello = require("./index");
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "application/json" });
    // res.end(JSON.stringify({ data: "Hello World!" }));
    res.end("Hey Server Started...");
    res.end(hello);
  })
  .listen(3000, () => {
    console.log("Server Started...");
  });
