var express = require('express');
var hbs = require('express-hbs');
var path = require('path');


var sub = require('./sub');

var main = express();

var handlebars = hbs.express4({
  beautify:      true,
  defaultLayout: path.join(__dirname, './views/layouts/default'),
  partialsDir:   path.join(__dirname, './views/partials'),
  layoutsDir:    path.join(__dirname, './views/layouts')
});

// Set the application's view engine.
main.engine('hbs', handlebars);
main.set('view engine', 'hbs');
main.set('views', path.join(__dirname, './views'));

main.get('/', function(req, res) {
  res.render('index');
});

main.use('/sub', sub);

// Different (correct) directories, but only rendering main's layouts and partials.
console.log('main', main.get('views'));
console.log('sub', sub.get('views'));


main.listen(3000);