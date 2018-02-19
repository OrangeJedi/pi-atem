var Atem = require('atem');
var atem = new Atem("192.168.10.240"); //connects to the ATEM - !!! Does you computer have an IPv4 address !!! - !! ATEM address not hyperdeck or control panel !!
var joystick = new (require('joystick'))(0, 3500, 350); //
joystick.on('button', function (x){
    if(x.value === 1){
        if(x.number === 0){
            atem.cut();
            console.log('a');
        }else if(x.number === 1){
            console.log('b');
            atem.setPreview(5);
        }
    }
});
