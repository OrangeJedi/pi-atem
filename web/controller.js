var gp,oldGp,gpL;
var preBuss = [[1,2,3,4],[6,5,3010,3020]], q = 0, r = 0;
var socket = io();
window.addEventListener("gamepadconnected", function(e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);
    gp = navigator.getGamepads()[0];
    oldGp = {"buttons": [],
        "axes": []
    };
    for(var i = 0;i < gp.buttons.length;i++){
        oldGp.buttons[i] = {"pressed" : gp.buttons[i].pressed};
    }
    for(i = 0;i < gp.axes.length;i++){
        oldGp.axes[i] = gp.axes[i];
    }
    //socket.emit('changePreview', preBuss[q][r]);
    setGpLayout();
    update();
});
function update() {
    if (!gp) {
        return;
    }
    if (buttonPressed(gpL["x"])) { //2
        socket.emit('ftb');
    }
    if (buttonPressed(gpL["rightTrigger"])) { //7
        socket.emit('cut');
    }
    if (buttonPressed(gpL["leftTrigger"])) { //6
        socket.emit('auto');
    }
    //console.log("q " + q + "r " + r);
    if (buttonPressed(gpL["up"])) { //12
        if(q > 0){
            q--;
        }
        socket.emit('changePreview', preBuss[q][r]);
    }
    if (buttonPressed(gpL["down"])) { //13
        if(q < 1){
            q++;
        }
        socket.emit('changePreview', preBuss[q][r]);
    }
    if (buttonPressed(gpL["left"])) { //14
        if(r > 0){
            r--;
        }
        socket.emit('changePreview', preBuss[q][r]);
    }
    if (buttonPressed(gpL["right"])) { //15
        if(r < 3){
            r++;
        }
        socket.emit('changePreview', preBuss[q][r]);
    }

    for(var i = 0;i < gp.buttons.length;i++){
        oldGp.buttons[i] = {"pressed" : gp.buttons[i].pressed};
    }
    for(i = 0;i < gp.axes.length;i++){
        oldGp.axes[i] = gp.axes[i];
    }
    start = requestAnimationFrame(update);
}
socket.on('stateChange',function (msg) {
    console.log(msg);
});
function buttonDown(b) {
    if (typeof(b) == "object") {
        return b.pressed;
    }
    return b == 1.0;
}
function buttonPressed(b){
    return !buttonDown(oldGp.buttons[b]) && buttonDown(gp.buttons[b]);
}
function setGpLayout(){
    if(gp.buttons.length === 23){
        gpL = {
            "a" : 1,
            "b" : 2,
            "x" : 4,
            "y" : 5,
            "leftBumper" : 7,
            "rightBumper" : 8,
            "leftTrigger" : 17,
            "rightTrigger" : 18,
            "back" : 16,
            "menu" : 12,
            "leftStick": 14,
            "rightStick": 15,
            "up" : 19,
            "down" : 20,
            "left" : 21,
            "right" : 22
        };
    }else{
        gpL = {
          "a" : 0,
          "b" : 1,
          "x" : 2,
          "y" : 3,
          "leftBumper" : 4,
          "rightBumper" : 5,
          "leftTrigger" : 6,
          "rightTrigger" : 7,
          "back" : 8,
          "menu" : 9,
          "leftStick": 10,
          "rightStick": 11,
          "up" : 12,
          "down" : 13,
          "left" : 14,
          "right" : 15
        };
    }
}