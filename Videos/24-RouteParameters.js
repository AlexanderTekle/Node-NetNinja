var express = require('express');

var app = express();

app.get('/', function(req,res){
  res.send('homepage');
});

app.get('/contact', function(req,res){
  res.send('this is the contact page');
});

app.get('/profile/:id', function(req,res){
  res.send('You requested to see profile of id ' + req.params.id);
});

app.listen(3000);

/* practicing
var express = require('express');

app = express();

app.get('/', function(req,res){
  res.send('homepage')''
});

app.get('/contact',function(req,res){
  res.send('contact page');
});

app.get('profile/:id', function(req,res){
  res.send('You requested to see the profile with id: ' req.params.id);
});

app.listen(3000);*/
