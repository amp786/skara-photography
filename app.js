var express = require('express');
var app = express();
var routes = require ('./routes');
app.set('view engine', 'ejs');

var path = require('path');
app.use (express.static('public'));

// Routes

// home
app.get('/', routes.home);

// about
app.get('/about', routes.about);

// portfolio

// contact

// comingSoon
app.get('/coming-soon', routes.comingSoon);


// notFound
app.get('*', routes.notFound);

app.listen(9000, function() {
    console.log('The magic happens on localhost 9000');
});