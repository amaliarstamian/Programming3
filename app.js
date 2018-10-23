var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var engine = require('./modules/engine');

// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));


app.get('/', function(req, res){
  res.redirect('index.html');
});

server.listen(3000);