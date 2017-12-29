//directives
var fs = require('fs');
/*
fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt', 'utf8', function(err,data){
    fs.writeFile('stuff/newFile.txt', data);
  });
});*/



fs.unlink('stuff/newFile.txt', function(){
  fs.rmdir('stuff');
});

//console.log('hey');
