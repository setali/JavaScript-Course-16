var http = require("http");

var server = http.createServer(function (req, res) {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  console.log("Server log");
  res.end(JSON.stringify({ name: "Ali" }));
});

server.listen("3000");
