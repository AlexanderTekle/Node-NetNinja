//pipes

var http = require('http');
var fs = require('fs');


//test on server

var server = http.createServer(function(req,res){
  console.log('Request made: ' +req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var myReadStream = fs.createReadStream('readMe.txt', 'utf8');
  //var myWriteStream = fs.createWriteStream('writeMe.txt'); not needed

  myReadStream.pipe(res);


  //res.end('Done');
});

server.listen(3000, '127.0.0.1');
console.log("Listening on port 3000.");
