var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var routes = require('./routes');
var data = require('./data/data.js');

var app = express();
var port = 1337;

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.json(data.me);
})

app.get('/name', function(req, res) {
	res.json(data.me.name);
})

app.get('/location', function(req, res) {
	res.json(data.me.location);
})


app.get('/hobbies/:ord?', routes.hobbies);

app.get('/occupations/:ord?', routes.occupations);



app.listen(port, function(req, res){
	console.log("listening on port " + port);
})
