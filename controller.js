var joystick = new (require('joystick'))(0, 3500, 350);
joystick.on('button', console.log);
joystick.on('axis', console.log);

var ATEM = require('applest-atem');
var atem = new ATEM();
atem.connect('192.168.10.240'); //connects to the ATEM - !!! Does you computer have an IPv4 address !!! - !! ATEM address; NOT hyperdeck or control panel !!

atem.on('connect', function() {
    console.log('ATEM Connected');
});
atem.on('stateChanged', function(err, state) {
    console.log(state); // catch the ATEM state.
});