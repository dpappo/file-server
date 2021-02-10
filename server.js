const net = require("net");

let server = net.createServer();

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

server.on("connection", (conn) => {
  console.log("Connection");
});
