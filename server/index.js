var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./controllers/UserController');
var AuthController = require('./controllers/AuthController');

//app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   }); 

// Use Routes
app.use('/users', UserController);
app.use('/auth', AuthController);

module.exports = app;