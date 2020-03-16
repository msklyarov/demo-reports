const http = require('http');
const config = require('config');
const generateApp = require('./generateApp');

const app = generateApp();
const server = http.createServer(app);
const serverPort = config.get('server.port');

server.listen(serverPort, () => {
  console.log(`Example app listening on port ${serverPort}!`);
});
