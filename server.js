var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Listeing on port 3000');
});