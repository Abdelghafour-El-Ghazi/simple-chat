import socketIO from "socket.io";
const PORT = 5000;
const io = socketIO(PORT);


io.on('connection', (socket) => {
    console.log("connection established!!")
  socket.on('newChatMessage', (data) => { 
      io.emit('newChatMessage',data)
  });
  socket.on('disconnect', () => { 
    console.log('Diconnected')
  });
});

console.log(`Up and running on port ${PORT}`)
