#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app'
import debug from 'debug'
import http from 'http'
import { Ip } from '../config'
let dbug = debug('node-express:server')
/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 * Create socket server
 */

var server = http.createServer(app);

/**
 * socket.io
 */
import io from '../router/socket/socketIo'
io(server)
/**
 * expres-ws === h5-WebSocket
 */
// import webSocketServer  from '../router/socket/express-ws'
// webSocketServer(app,server)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port,Ip);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('本地地址：', 'http://'+addr.address+':'+addr.port+'/')  
  dbug('Listening on ' + bind);
}
