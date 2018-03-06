//setup for webserver + websockets
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//setup for ATEM
var ATEM = require('applest-atem');
var atem = new ATEM();
atem.connect('192.168.10.240'); //connects to the ATEM - !!! Does you computer have an IPv4 address !!! - !! ATEM address; NOT hyperdeck or control panel !!

//setup for hyperdeck
var HyperdeckLib = require("hyperdeck-js-lib");

var hyperdeck = new HyperdeckLib.Hyperdeck("192.168.10.239");
hyperdeck.onConnected().then(function() {
    // connected to hyperdeck
    // Note: you do not have to wait for the connection before you start making requests.
    // Requests are buffered until the connection completes. If the connection fails, any
    // buffered requests will be rejected.
    hyperdeck.makeRequest("device info").then(function(response) {
        console.log("Got response with code "+response.code+".");
        console.log("Hyperdeck unique id: "+response.params["unique id"]);
    }).catch(function(errResponse) {
        if (!errResponse) {
            console.error("The request failed because the hyperdeck connection was lost.");
        }
        else {
            console.error("The hyperdeck returned an error with status code "+errResponse.code+".");
        }
    });
}).catch(function() {
    console.error("Failed to connect to hyperdeck.");
});

//Global Variables
var HDrec = false;

app.use(express.static('web')); //hosts /web directory

//websockets
io.on('connection', function(socket){
    console.log('a user connected');
    io.emit('stateChange', atem.state);
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    //ATEM sockets
    socket.on('cut',function (msg) {
        atem.cutTransition();
        console.log("cut");
    });
    socket.on('auto',function (msg) {
        atem.autoTransition();
        console.log("auto");
    });
    socket.on('changePreview',function (msg) {
        atem.changePreviewInput(msg);
        console.log("Preview chaged to: " + msg);
    });
    socket.on('changeProgram',function (msg) {
        atem.changeProgramInput(msg);
        console.log("Program changed to: " + msg);
    });
    socket.on('ftb',function (msg) {
        atem.fadeToBlack();
        console.log("fade to black");
    });
    socket.on('ds1',function(msg){
        if(atem.state.video.downstreamKeyOn[0]){
            atem.changeDownstreamKeyOn(0,false);
        }else{
            atem.changeDownstreamKeyOn(0,true);
        }
        console.log("ds1");
    });
    socket.on('ds2',function(msg){
        if(atem.state.video.downstreamKeyTie[1]){
            atem.changeDownstreamKeyOn(1,false);
        }else{
            atem.changeDownstreamKeyOn(1,true);
        }
        console.log("ds2");
    });
    socket.on('ds1T',function(msg){
        if(atem.state.video.downstreamKeyTie[0]){
            atem.changeDownstreamKeyTie(0,false);
        }else{
            atem.changeDownstreamKeyTie(0,true);
        }
        console.log("ds1T");
    });
    socket.on('ds2T',function(msg){
        if(atem.state.video.downstreamKeyTie[1]){
            atem.changeDownstreamKeyTie(1,false);
        }else{
            atem.changeDownstreamKeyTie(1,true);
        }
        console.log("ds2T");
    });
    socket.on('ds1A',function(msg){
        if(atem.state.video.downstreamKeyOn[0]){
            atem.autoDownstreamKey(0,false);
        }else{
            atem.autoDownstreamKey(0,true);
        }
        console.log("ds1A");
    });
    socket.on('ds2A',function(msg){
        if(atem.state.video.downstreamKeyOn[1]){
            atem.autoDownstreamKey(1,false);
        }else{
            atem.autoDownstreamKey(1,true);
        }
        console.log("ds2A");
    });
    socket.on('previewTrans',function(msg){
       atem.prev
    });
    //hyperdeck sockets
    socket.on('HDrecord',function(msg){
        if(HDrec){
            hyperdeck.record();
        }else{
            hyperdeck.stop();
        }
        console.log("hyperdeck record");
    });
});
//ATEM listeners
atem.on('connect', function() {
    console.log('ATEM connected');
});

atem.on('stateChanged', function(err, state) {
    //console.log(state);
    io.emit('stateChange', state);
});

//runs express webserver
http.listen(8080, function(){
    console.log('listening on port 8080');
});
