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
        console.log('cut');
    });
    socket.on('auto',function (msg) {
        atem.autoTransition();
        console.log('auto');
    });
    socket.on('changePreview',function (msg) {
        atem.changePreviewInput(msg);
        console.log("Changed Preview to: " + msg);
    });
    socket.on('changeProgram',function (msg) {
        atem.changeProgramInput(msg);
        console.log("Changed Program to: " + msg);
    });
    socket.on('ftb',function (msg) {
        atem.fadeToBlack();
        console.log("fade to black");
    });
    socket.on('ds1',function(msg){
        if(atem.state.video.downstreamKeyOn[0]){
            atem.changeDownstreamKeyOn(1,false);
        }else{
            atem.changeDownstreamKeyOn(1,true);
        }
    });
    socket.on('ds2',function(msg){
        if(atem.state.video.downstreamKeyOn[0]){
            atem.changeDownstreamKeyOn(2,false);
        }else{
            atem.changeDownstreamKeyOn(2,true);
        }
    });
    socket.on('ds1T',function(msg){
        if(atem.state.video.downstreamKeyOn[0]){
            atem.changeDownstreamKeyTie(1,false);
        }else{
            atem.changeDownstreamKeyTie(1,true);
        }
    });
    socket.on('ds2T',function(msg){
        if(atem.state.video.downstreamKeyOn[0]){
            atem.changeDownstreamKeyTie(2,false);
        }else{
            atem.changeDownstreamKeyTie(2,true);
        }
    });
    socket.on('ds1A',function(msg){
        if(atem.state.video.downstreamKeyOn[0]){
            atem.autoDownstreamKey(1,false);
        }else{
            atem.autoDownstreamKey(1,true);
        }
    });
    socket.on('ds2A',function(msg){
        if(atem.state.video.downstreamKeyOn[0]){
            atem.autoDownstreamKey(2,false);
        }else{
            atem.autoDownstreamKey(2,true);
        }
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