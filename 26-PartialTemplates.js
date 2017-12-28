var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs'); //set ejs as our view engine
app.use('/assets', express.static('assets'));
app.get('/', function(req,res){
  res.render('index');
});

app.get('/contact',function(req,res){
  res.render('contact',{qs : req.query});
  console.log(req.query);
});

app.post('/contact', urlencodedParser, function(req,res){
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req,res){
  var data = {age:29, job: 'ninja', hobbies:['fishing', 'running', 'traveling']}

  res.render('profile',{person: req.params.name, data:data});

});

app.listen(3000);
