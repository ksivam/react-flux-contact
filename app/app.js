var express = require('express');
var app = express();
var httpServer = require('http').Server(app);

// make the default public path from browser to 'www'
app.use(express.static('www'));

// handle root get call ie: http:localhost:2121/
app.get('/', function(req, rsp) {
    rsp.sendFile(__dirname + '/www/index.html')
});

httpServer.listen(2121, function() {
    console.log('listening on *:2121');
});