//copied file 16 and edited

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request was made at: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'}); //text/html lets it know its an html file

  var myReadStream = fs.createReadStream('index.html', 'utf8'); //change the file to the html file
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');

console.log('Listening on port 3000');
