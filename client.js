const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    IP,
    PORT
  });

  conn.on("connect", () => {
    console.log("Connection successful!");
    conn.write("Name: KV");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};