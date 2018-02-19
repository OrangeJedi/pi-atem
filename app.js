//setup for webserver + websockets
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//setup for ATEM
var ATEM = require('applest-atem');
var atem = new ATEM();
atem.connect('192.168.10.240'); //connects to the ATEM - !!! Does you computer have an IPv4 address !!! - !! ATEM address; NOT hyperdeck or control panel !!
//Global Variables


app.use(express.static('web')); //hosts /web directory

//websockets
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('cut',function (msg) {
        atem.cutTransition();
    });
    socket.on('auto',function (msg) {
        atem.autoTransition();
    });
    socket.on('changePreview',function (msg) {
        atem.changePreviewInput(msg);
    });
});

//ATEM listeners
atem.on('connect', function() {
    console.log('ATEM connected');
});

atem.on('stateChanged', function(err, state) {
    console.log(state);
    io.emit('stateChange', state);
});

//runs express webserver
http.listen(8080, function(){
    console.log('listening on port 8080');
});