var socket = io();
var inputs = [1,2,3,4,5,6,3010,3020,6000,0,1000];
var ME = 0;
var ATEMstate;
socket.on('stateChange', function (msg) {
    console.log(msg);
    //update names
    $('#upstreamBus').html(createButtons('upstream',msg));
    $('#programBus').html(createButtons('program',msg));
    $('#previewBus').html(createButtons('preview',msg));
    setButtons();
    color(msg);
});
function resetButtons(state){
    $('#upstreamBus').html(createButtons('upstream',state));
    $('#programBus').html(createButtons('program',state));
    $('#previewBus').html(createButtons('preview',state));
    setButtons();
    color(state);
}
function createButtons(busName,msg){
    var b = busName[0].toUpperCase();
    for(var i = 1;i < busName.length;i++){
        b += busName[i];
    }
    var txt = "<table class='bus'><tr>";
    for(i = 0; i < inputs.length;i++){
        txt += "<td class='" + busName + "TD TDbutton' id='" + busName + "TD_" + inputs[i] + "'><button class='" + busName + "Button Button' id='" + busName + "Button_" + inputs[i] + "' onclick='set" + b + "(" + inputs[i] + ")'>" + msg.channels[inputs[i]].label + "</button></td>";
    }
    txt += "</tr></table>";
    return txt;
}
function setButtons(){
    $('table').find('button').css( "height", $('table.bus').find('button').width() );
}
function setPreview(channel){
    socket.emit('changePreview',channel);
}
function setProgram(channel){
    socket.emit('changeProgram',channel);
}
function auto(){
    socket.emit('auto');
}
function cut(){
    socket.emit('cut');
}
function ftb(){
    socket.emit('ftb');
}
function color(state){
    $('#programButton_' + state.video.ME[0].programInput).addClass('red');
    $('#previewButton_' + state.video.ME[0].previewInput).addClass('green');
}
function meChange(){
    ME = $('#MEnum').val();
    console.log(ME);
    socket.emit('ME',ME);
    resetButtons(ATEMstate);
}