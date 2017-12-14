var express = require('express');
var app = express();

var student = require('./routes/student');

app.use('/api', student);

module.exports = app;