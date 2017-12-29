var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request made at: ' + req.url);
  res.writeHead(200, {'Content-Type': 'appleication/json'});
  var myObj = {
    name: 'Alex',
    job: 'N/A',
    age: 19
  };
  res.end(JSON.stringify(myObj));
});


server.listen(3000, '127.0.0.1');
console.log('Listening at port 3000');
