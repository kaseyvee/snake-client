let connection;

const handleUserInput = function(key) {
  
  // exit
  if (key === '\u0003') {
    console.log("ciao snek");
    process.exit();
  }

  // movement controls
  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }


  // messages
  if (key === 'q') {
    connection.write("Say: snakes get rakes");
  }

  if (key === 'e') {
    connection.write("Say: snitches get stitches");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};