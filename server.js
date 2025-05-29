const { createServer } = require('http');
const next = require('next');
const { parse } = require('url');
const socketio = require('socket.io');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

let io;

const waitlistFilePath = path.join(process.cwd(), "waitlist-data.json");

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  io = socketio(server, {
    path: '/api/socket.io', // Match client path
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  // Make io globally available for import
  global.io = io;

  // Optional: log connections
  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);
    socket.on('disconnect', () => {
      console.log('Socket disconnected:', socket.id);
    });
  });

  server.listen(4000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:4000');
  });
});