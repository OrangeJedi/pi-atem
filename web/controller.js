var gp, oldGp, gpL;
var bus;
var preBuss = [[1, 2, 3, 4], [6, 5, 3010, 3020]], q = 0, r = 0;
var socket = io();
window.addEventListener("gamepadconnected", function (e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);
    gp = navigator.getGamepads()[0];
    oldGp = {
        "buttons": [],
        "axes": []
    };
    for (var i = 0; i < gp.buttons.length; i++) {
        oldGp.buttons[i] = {"pressed": gp.buttons[i].pressed};
    }
    for (i = 0; i < gp.axes.length; i++) {
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

    if (buttonPressed(gpL["rightTrigger"])) {
        socket.emit('cut');
    }
    if (buttonPressed(gpL["leftTrigger"])) {
        socket.emit('auto');
    }
    if (buttonPressed(gpL["up"])) {
        if (q > 0) {
            q--;
        }
        socket.emit('changePreview', preBuss[q][r]);
    }
    if (buttonPressed(gpL["down"])) {
        if (q < 1) {
            q++;
        }
        socket.emit('changePreview', preBuss[q][r]);
    }
    if (buttonPressed(gpL["left"])) {
        if (r > 0) {
            r--;
        }
        socket.emit('changePreview', preBuss[q][r]);
    }
    if (buttonPressed(gpL["right"])) {
        if (r < 3) {
            r++;
        }
        socket.emit('changePreview', preBuss[q][r]);
    }
    if (buttonDown(gp.buttons[gpL["back"]])) {
        if (buttonPressed(gpL["x"])) {
            socket.emit('ds1T');
        }
        if (buttonPressed(gpL["y"])) {
            socket.emit('ds2T');
        }
        if (buttonPressed(gpL["b"])) {
            socket.emit('ds2A');
        }
        if (buttonPressed(gpL["a"])) {
            socket.emit('ds1A');
        }
    } else if (buttonDown(gp.buttons[gpL["menu"]])){
        if (buttonPressed(gpL["x"])) {

        }
        if (buttonPressed(gpL["y"])) {

        }
        if (buttonPressed(gpL["b"])) {

        }
        if (buttonPressed(gpL["a"])) {

        }
    } else {
        if (buttonPressed(gpL["x"])) {
            socket.emit('ftb');
        }
        if (buttonPressed(gpL["y"])) {
        }
        if (buttonPressed(gpL["b"])) {
            socket.emit('ds2');
        }
        if (buttonPressed(gpL["a"])) {
            socket.emit('ds1');
        }
    }

    //axis
    if (buttonDown(gp.buttons[gpL["rightBumper"]])) {
        bus = "changeProgram";
    } else {
        bus = "changePreview";
    }
    if (buttonDown(gp.buttons[gpL["leftBumper"]])) {
        if (axisRange(0, .8, true)) {
            socket.emit(bus, 2002);
        }
        if (axisRange(0, -.8, false)) {
            socket.emit(bus, 2001);
        }
        if (axisRange(1, .8, true)) {
            socket.emit(bus, 1000);
        }
        if (axisRange(1, -.8, false)) {
            socket.emit(bus, 0);
        }
        if (axisRange(2, .8, true)) {
            socket.emit(bus, 10);
        }
        if (axisRange(2, -.8, false)) {
            socket.emit(bus, 9);
        }
        if (axisRange(3, .8, true)) {
            socket.emit(bus, 8);
        }
        if (axisRange(3, -.8, false)) {
            socket.emit(bus, 7);
        }
    } else {
        if (axisRange(0, .8, true)) {
            socket.emit(bus, 4);
        }
        if (axisRange(0, -.8, false)) {
            socket.emit(bus, 3);
        }
        if (axisRange(1, .8, true)) {
            socket.emit(bus, 2);
        }
        if (axisRange(1, -.8, false)) {
            socket.emit(bus, 1);
        }
        if (axisRange(2, .8, true)) {
            socket.emit(bus, 3020);
        }
        if (axisRange(2, -.8, false)) {
            socket.emit(bus, 3010);
        }
        if (axisRange(3, .8, true)) {
            socket.emit(bus, 5);
        }
        if (axisRange(3, -.8, false)) {
            socket.emit(bus, 6);
        }
    }

    //oldGp setup
    for (var i = 0; i < gp.buttons.length; i++) {
        oldGp.buttons[i] = {"pressed": gp.buttons[i].pressed};
    }
    for (i = 0; i < gp.axes.length; i++) {
        oldGp.axes[i] = gp.axes[i];
    }
    start = requestAnimationFrame(update);
}

socket.on('stateChange', function (msg) {
    console.log(msg);
    for(var i = 0;i < 2; i++){
        for(var j = 0; j < 5; j++){
            if(msg.video.ME[0].previewInput === preBuss[i][j]){
                q = i;
                r = j;
            }
        }
    }
});

function buttonDown(b) {
    if (typeof(b) == "object") {
        return b.pressed;
    }
    return b == 1.0;
}

function buttonPressed(b) {
    return !buttonDown(oldGp.buttons[b]) && buttonDown(gp.buttons[b]);
}

function axisRange(number, value, gl) {
    if (gl) {
        return !(oldGp.axes[number] > value) && (gp.axes[number] > value);
    } else {
        return !(oldGp.axes[number] < value) && (gp.axes[number] < value);
    }

}

function setGpLayout() {
    if (gp.buttons.length === 23) {
        gpL = {
            "a": 1,
            "b": 2,
            "x": 4,
            "y": 5,
            "leftBumper": 7,
            "rightBumper": 8,
            "leftTrigger": 17,
            "rightTrigger": 18,
            "back": 16,
            "menu": 12,
            "leftStick": 14,
            "rightStick": 15,
            "up": 19,
            "down": 20,
            "left": 21,
            "right": 22
        };
    } else {
        gpL = {
            "a": 0,
            "b": 1,
            "x": 2,
            "y": 3,
            "leftBumper": 4,
            "rightBumper": 5,
            "leftTrigger": 6,
            "rightTrigger": 7,
            "back": 8,
            "menu": 9,
            "leftStick": 10,
            "rightStick": 11,
            "up": 12,
            "down": 13,
            "left": 14,
            "right": 15
        };
    }
}