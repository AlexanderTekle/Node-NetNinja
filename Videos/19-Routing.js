var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  console.log('Request was made at: ' + req.url);

  if (req.url === '/home' || req.url==='/')
  {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream('index.html').pipe(res);
  }
  else if (req.url === '/contact')
  {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream('contact.html').pipe(res);
  }
  else if (req.url === '/api/people'){
    var people = [{name: 'Alex', age: 19}, {name: 'Abigail', age: 25}, {name: 'Jackson', age: 15}, {name: 'Sharon', age: 17}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(people));
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/html'})
    fs.createReadStream('404.html').pipe(res);
  }
  //res.writeHead(200, {'Content-Type': 'application/json'});
  //res.end('Feed me popcorn'); not needed
});

server.listen(3000, '127.0.0.1');
console.log('Listening at port 3000');
