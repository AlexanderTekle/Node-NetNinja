//console.log(__dirname);

var events = require("events");
var util = require("util");
var fs = require("fs");

var readMe = fs.readFile('readMe.txt', 'utf8', function(err, data){ //asynchronous
  console.log(data);
});

console.log('test');
//console.log(readMe);
//fs.writeFileSync('writeMe.txt', readMe);

/*
var Person = function(name)
{
  this.name = name;
}

var Alex = new Person("Alex");
var Jon = new Person ("Jon");
var Sirak = new Person("Sirak");

var people = [Alex, Jon, Sirak];
util.inherits(Person, events.EventEmitter);

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + ' said: ' + mssg);
  });
});

Alex.emit('speak', "hello");
Jon.emit('speak', 'hey');
Sirak.emit('speak', 'hi');
*/
/*
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
  console.log("Emitter turned on");
})

myEmitter.emit('someEvent', "lol");
*/

/*console.log("Start");
var time = 0;
var timer = setInterval(function(){
  time+=2;
  console.log(time + "seconds elapsed");
  if (time > 5)
    clearInterval(timer);
},2000);*/
