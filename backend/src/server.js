import 'dotenv/config';
import { Server } from 'socket.io';
import mongoDb from './config/MongoDb.js';
import app from './app.js';

mongoDb.connect();

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

const io = new Server(server, { cors: { origin: '*' }, pingTimeout: 6000 });

io.on('connection', (socket) => {
  console.log(`Just have a user connect`);

  socket.on('client-join-chat', (room) => {
    socket.join(room);
    socket.room = room;
    console.log('User joined room', room);
  });

  socket.on('client-send-message', (message) => {
    socket.to(socket.room).emit('server-send-message', message);
  });
});
