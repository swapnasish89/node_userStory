var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var db = require('./db');

var app = express();

app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.use(express.static(__dirname + '/public'));

var api = require('./app/routes/api')(app, express);
app.use("/api",api);

app.get('/*', function(req, res){
	res.sendFile(__dirname + "/public/app/views/index.html");
});

module.exports = app;