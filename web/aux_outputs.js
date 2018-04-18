var socket = io();
var inputs = [0, 1, 2, 3, 4, 5, 6, 9, 10, 3010, 3020, 1000, 10010, 10011, 10020, 10021];
//socket.on('stateChange', function (msg) {
console.log(msg);
//update names
$('#Aux1').html(createButtons('aux1', msg));
$('#Aux2').html(createButtons('aux2', msg));
$('#Aux3').html(createButtons('aux3', msg));
$('#Aux4').html(createButtons('aux4', msg));
$('#Aux5').html(createButtons('aux5', msg));
$('#Aux6').html(createButtons('aux6', msg));
setButtons();
color(msg);

//});
function color(state) {
    $('#aux1Button_' + state.video.auxs[0]).addClass('yellow');
    $('#aux2Button_' + state.video.auxs[1]).addClass('yellow');
    $('#aux3Button_' + state.video.auxs[2]).addClass('yellow');
    $('#aux4Button_' + state.video.auxs[3]).addClass('yellow');
    $('#aux5Button_' + state.video.auxs[4]).addClass('yellow');
    $('#aux6Button_' + state.video.auxs[5]).addClass('yellow');
}
function createButtons(busName, msg) {
    var b = busName[0].toUpperCase();
    for (var i = 1; i < busName.length; i++) {
        b += busName[i];
    }
    var txt = "<table class='bus'><tr><td>" + b + "</td>";
    for (i = 0; i < inputs.length; i++) {
        txt += "<td class='" + busName + "TD TDbutton' id='" + busName + "TD_" + inputs[i] + "'><button class='" + busName + "Button Button' id='" + busName + "Button_" + inputs[i] + "' onclick='setAux(" + b[3] + "," + inputs[i] + ")'>" + msg.channels[inputs[i]].label + "</button></td>";
    }
    txt += "</tr></table>";
    return txt;
}

function setButtons() {
    $('table').find('button').css("height", $('table.bus').find('button').width());
}
function setAux(aux,input){
    socket.emit('changeAux', {"aux":aux,"input":input});
}