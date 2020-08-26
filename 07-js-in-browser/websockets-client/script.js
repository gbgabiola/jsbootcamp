const url = 'wss://glitch-websockets-server.glitch.me/';
const connection = new WebSocket(url);

connection.onopen = () => {
  connection.send('hey!');
};

connection.onerror = error => {
  console.log(`Websocket error: ${error}`);
};

connection.onmessage = (e) => {
  console.log(e.data);
};
