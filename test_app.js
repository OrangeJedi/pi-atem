//setup for webserver + websockets
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var state = require("./out/output 1.json");

app.use(express.static('web')); //hosts /web directory

//websockets
io.on('connection', function(socket){
    console.log('a user connected');
    io.emit('stateChange', state);
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    //ATEM sockets
    socket.on('cut',function (msg) {
        console.log("cut");
    });
    socket.on('auto',function (msg) {
        console.log("auto");
    });
    socket.on('changePreview',function (msg) {
        console.log("Preview chaged to: " + msg);
    });
    socket.on('changeProgram',function (msg) {
        console.log("Program changed to: " + msg);
    });
    socket.on('ftb',function (msg) {
        console.log("fade to black");
    });
    socket.on('ds1',function(msg){
        console.log("ds1");
    });
    socket.on('ds2',function(msg){
        console.log("ds2");
    });
    socket.on('ds1T',function(msg){
        console.log("ds1T");
    });
    socket.on('ds2T',function(msg){
        console.log("ds2T");
    });
    socket.on('ds1A',function(msg){
        console.log("ds1A");
    });
    socket.on('ds2A',function(msg){
        console.log("ds2A");
    });
    //hyperdeck sockets
    socket.on('HDrecord',function(msg){
        console.log("hyperdeck record");
    });
});
//runs express webserver
http.listen(8080, function(){
    console.log('listening on port 8080');
});
