const path = require('path');
var express = require('express');
var app = express();

var htmlPath = path.join(__dirname, 'views');

app.use(express.static(htmlPath));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/loguin.html");
});
var porta = process.env.PORT || 8080;

var server = app.listen(porta, function () {
    var host = 'localhost';
    var port = server.address().port;
    console.log('listening on http://'+host+':'+port+'/');
});