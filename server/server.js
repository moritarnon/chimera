const http = require('http');
const app = require('./src/app');
const port = process.env.PORT || 3001;

const server = http.createServer(app);
server.listen(port);

console.log(`listening on ${port}`);

//server.on('error', onError);
//server.on('listening', onListening);
