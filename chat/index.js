var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/img/catmojis.png', function(req, res){
  res.sendFile(__dirname + '/img/catmojis.png');
});

app.get('/img/catmoji_logo_white.png', function(req, res){
  res.sendFile(__dirname + '/img/catmoji_logo_white.png');
});

app.get('/fnt/Roboto-Regular.ttf', function(req, res){
  res.sendFile(__dirname + '/fnt/Roboto-Regular.ttf');
});

app.get('/data.json', function(req, res){
  res.sendFile(__dirname + '/data.json');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
