// server/server.js
const express = require('express');
const http = require('http');
const robot = require('robotjs');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.get('/view', (req, res) => {
    debugger
    res.sendFile(path.join(__dirname,'..', 'src', 'components', 'Display.js'));
});

io.on('connection', (socket) => {
    socket.on('join-message', (roomId) => {
        socket.join(roomId);
        console.log(`User joined in room : ${roomId}`);
    });

    // Add other socket event handlers here

});

const server_port = process.env.PORT || 5000;
server.listen(server_port, () => {
    console.log(`Server is live on ${server_port}`);
});
