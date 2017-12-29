//create a server, make a request

var http = require('http');

var server = http.createServer(function(request, response){
  console.log('Request made on: ' + request.url);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hey');
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 300');
