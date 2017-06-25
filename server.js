var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));

app.use('/googleApi/:start/:end', function(req, res, next){
    request({
        url: `https://maps.googleapis.com/maps/api/directions/json?origin=${req.params.start}&destination=${req.params.end}&key=AIzaSyBj_FS2naYF-iT06-nXk_3lhCQEQQrCYbg`,
        type: 'GET',
        json: true
    }, (err, response, body) => {
        if(!err && response.statusCode === 200) {
            res.json(body);
        } else {
            res.send('Unable to fatch GOOGLE API.');
        }
    });
});

app.listen(3000, function() {
    console.log('Listeing on port 3000');
});