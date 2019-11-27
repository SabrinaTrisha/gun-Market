module.exports = function(app,io) {
    var articleController = require("./../Controllers/controlle");
  
    //  app.get("/Shop", articleController.Shop);
    //  app.get("/add", articleController.add);
     app.get("/buy", articleController.buy);

     io.on('connection', function(socket){
        console.log('a user connected');
    });
    
    io.on('connection', function(socket){
      console.log('a user connected');
      socket.on('disconnect', function(){
        console.log('user disconnected');
      });
    });
    io.on('connection', function(socket){
      socket.on('chat message', function(msg){-
        console.log('message: ' + msg);
      });
    });  
    
    io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
    io.on('connection', function(socket){
      socket.broadcast.emit('hi');
    });
    io.on('connection', function(socket){
      socket.on('chat message', function(msg){
        io.emit('chat message', msg);
      });
    });
    //  app.get("/socket", articleController.socket);
  };