var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var students = require('./routes/student');

var app = express();

//connect to our database
//Ideally you will obtain DB details from a config file

var dbName='studentDB';

var connectionString='mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', students);

module.exports = app;