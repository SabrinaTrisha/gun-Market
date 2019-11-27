var http = require("http");
const express = require("express");
const app = express();
const server = http.Server(app);
// var htttp = require('http').createServer(app);
// var io = require('socket.io')(htttp);
var io = require('socket.io')(server);
const bodyParser = require("body-parser");

// const mongo = require("mongodb");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));
require("./routes/route")(app,io);




// app.get('/socket.html', function(req, res){
//   res.sendFile(__dirname + '/views/socket.html');
// });

// io.on('connection', function(socket){
//     console.log('a user connected');
// });

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// });  

// io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
// io.on('connection', function(socket){
//   socket.broadcast.emit('hi');
// });
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

// app.route('/goData')
//  	.get(function (req, res) {
// 		res.sendFile(path + '/views/addItem.html');
//   });
  
//   app.route('/goShop')
//   .get(function (req, res) {
//    res.sendFile(path + '/views/ShopNow.html');
//  });  
server.listen(3000, "localhost", function() {
    console.log("Server running");
  });