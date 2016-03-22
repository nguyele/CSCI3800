var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hello World!');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.put('/', function(req, res){
    res.send('Got a put request');
});

app.delete('/', function(req, res){
    res.send('Got a delete request');
});

app.listen(8080);