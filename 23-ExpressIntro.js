var express = require('express');

var app = express(); //fire express app

app.listen(3000); //listen to port
//HTTP methods: GET, POST, DELETE, PUT
app.get('/', function(req,res){
  res.send('this is the homepage');
});

app.get('/contact', function(req,res){
  res.send('this is the contact page');
});
