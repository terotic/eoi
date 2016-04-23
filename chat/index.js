var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/css/screen.css', function(req, res){
  res.sendFile(__dirname + '/css/screen.css');
});

app.get('/img/catmojis.png', function(req, res){
  res.sendFile(__dirname + '/img/catmojis.png');
});

app.get('/img/ilmi-faces-02-poika.png', function(req, res){
  res.sendFile(__dirname + '/img/ilmi-faces-02-poika.png');
});

app.get('/img/ilmi-faces-02-nainen.png', function(req, res){
  res.sendFile(__dirname + '/img/ilmi-faces-02-nainen.png');
});

app.get('/img/ilmi-logo-01.svg', function(req, res){
  res.sendFile(__dirname + '/img/ilmi-logo-01.svg');
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
