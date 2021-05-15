const express = require("express");    // required for creating web server
const socket = require("socket.io");   // required for creating web socket
var app = express();

var server = app.listen(4000,function(){
    console.log("listening port 4000");
})

app.use(express.static("public"));

var upgraded_server = socket(server);   // it converts a normal web server to websocket
upgraded_server.on("connection",function(socket){

    socket.on('sendMessage',function(data){
        upgraded_server.emit("broadcastMessage",data);
    });
    console.log("web socket connected",socket.id);
})