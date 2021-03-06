#!/usr/bin/env nodejs
var express = require('express');

var todoController = require('./controllers/todoController');


var app = express();

//set up template engine

app.set('view engine','ejs');


//static files
app.use(express.static('./public'));


todoController(app);

//listen port
app.listen(8080);

console.log('You are listening to port 8080!');



