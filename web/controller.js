var gp;
var socket = io();
window.addEventListener("gamepadconnected", function(e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);
});
function start(){
    gp = navigator.getGamepads()[0];
    update()
}
setTimeout(start,150);
function update() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    if (!gamepads) {
        return;
    }

    var gp = gamepads[0];
    if (buttonPressed(gp.buttons[0])) {
        b--;
    } else if (buttonPressed(gp.buttons[2])) {
        b++;
    }
    if (buttonPressed(gp.buttons[1])) {
        a++;
    } else if (buttonPressed(gp.buttons[3])) {
        a--;
    }

    ball.style.left = a * 2 + "px";
    ball.style.top = b * 2 + "px";

    start = requestAnimationFrame(update);
}