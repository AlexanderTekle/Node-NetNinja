//writable streams
var fs = require('fs');
var myWriteStream = fs.createWriteStream('writeMe.txt');
var myReadStream = fs.createReadStream('readMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
  console.log("Data received.");
  myWriteStream.write(chunk);
})
