const net = require("net");

const client = net.createConnection({
  host: "localhost",
  port: 3000,
});

client.on("connect", () => {
  console.log("connected");
});

client.on("close", () => {
  console.log("disconnect");
});
