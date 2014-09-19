var http = require('http');
var url = require('url');

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('id: ' + req.query.id);
});
app.listen(8092);


/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  
  res.end('Hello Node.js\n' + query[0]);

}).listen(8092, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8092/');

*/

