//writable streams - allows node to write data to stream
//readable streams - allows node to read data from streams
//duplex - read & write to stream

var fs = require('fs');

var myReadStream = fs.createReadStream('readMe.txt','utf8');

myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  console.log(chunk);
});
