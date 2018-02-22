var socket = io();
socket.on('stateChange', function (msg) {
    console.log(msg);
    //update names
    var txt = "<table><tr>";
    for(var i = 0;i < 6; i++){
        text += "<td class='programButton' id='programButton_" + i + "'>" + msg.channels[i].name + "</td>"
    }
    txt += "</tr></table>";
    $('#programBus').html(txt);

    txt = "<table><tr>";
    for(i = 0;i < 6; i++){
        text += "<td class='previewButton' id='previewButton_" + i + "' onclick='setPreview(" + i + ")'>" + msg.channels[i].name + "</td>"
    }
    txt += "</tr></table>";
    $('#previewBus').html(txt);
});
function setPreview(channel){
    socket.emit('changePreview',channel);
}