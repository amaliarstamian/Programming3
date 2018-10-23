var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var matrix = require('./modules/matrix');
// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

server.listen(3000);

io.on("connection", function (socket) {
  socket.emit('receive matrix', matrix);
  var interval = setInterval(function(){
    socket.emit('redraw',matrix);
  },200);
});