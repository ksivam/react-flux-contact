var express = require('express'),
    app = express(),
    httpServer = require('http').Server(app),
    io = require('socket.io')(httpServer),
    contacts = {
        krishnas: 'Offline',
        discovery: 'Offline',
        rover: 'Offline'
    };

// make the default public path from browser to 'www'
app.use(express.static('www'));

// handle root get call ie: http:localhost:2121/
app.get('/', function(req, rsp) {
    rsp.sendFile(__dirname + '/www/index.html')
});

// handle socket.io events
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    setInterval(function(){
        // mock push request.
        contacts[Date.now()] = 'Online';
        io.emit('contacts', contacts);
    }, 5 * 1000);
});

httpServer.listen(2121, function() {
    console.log('listening on *:2121');
});