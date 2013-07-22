var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var out = fs.readFileSync('index.html', 'utf8');
  // response.send('Hello World2!');
  response.send(out);
});

// var port = process.env.PORT || 5000;

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});
