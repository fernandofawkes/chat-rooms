const express = require('express');
const cors = require('cors');
const socket = require('socket.io');


const app = express();
app.use(cors());
app.use(express.json());


const port = process.env.PORT || '3001';

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('join_room', (data) => {
    socket.join(data);
    console.log('User joined room ' + data);
  });
 
  socket.on('message', (data) => {
    const {room, ...content} = data;
    console.log(data);
    socket.to(room).emit("log", content);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});