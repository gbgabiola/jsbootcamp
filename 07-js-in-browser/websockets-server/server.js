const Websocket = require('ws');
const wss = new Websocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
  });
  ws.send('ho!');
});
