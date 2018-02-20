var gp,oldGp;
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
    socket.emit('changePreview', preBuss[q][r]);
    update();
});
function update() {
    if (!gp) {
        return;
    }
    if (!buttonPressed(oldGp.buttons[2]) && buttonPressed(gp.buttons[2])) {
        socket.emit('ftb');
    }
    if (!buttonPressed(oldGp.buttons[7]) &&buttonPressed(gp.buttons[7])) {
        socket.emit('cut');
    }
    if (!buttonPressed(oldGp.buttons[6]) && buttonPressed(gp.buttons[6])) {
        socket.emit('auto');
    }
    //console.log("q " + q + "r " + r);
    if (!buttonPressed(oldGp.buttons[12]) && buttonPressed(gp.buttons[12])) {
        if(q > 0){
            q--;
        }
        socket.emit('changePreview', preBuss[q][r]);
    }
    if (!buttonPressed(oldGp.buttons[13]) && buttonPressed(gp.buttons[13])) {
        if(q < 1){
            q++;
        }
        socket.emit('changePreview', preBuss[q][r]);
    }
    if (!buttonPressed(oldGp.buttons[14]) && buttonPressed(gp.buttons[14])) {
        if(r > 0){
            r--;
        }
        socket.emit('changePreview', preBuss[q][r]);
    }
    if (!buttonPressed(oldGp.buttons[15]) && buttonPressed(gp.buttons[15])) {
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
function buttonPressed(b) {
    if (typeof(b) == "object") {
        return b.pressed;
    }
    console.log(b);
    return b == 1.0;
}