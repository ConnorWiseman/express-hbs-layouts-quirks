var express = require('express');
var hbs = require('express-hbs');
var path = require('path');

var sub = express();

var handlebars = hbs.express4({
  beautify:      true,
  defaultLayout: path.join(__dirname, './views/default/layouts/default'),
  partialsDir:   path.join(__dirname, './views/default/partials'),
  layoutsDir:    path.join(__dirname, './views/default/layouts')
});

sub.engine('hbs', handlebars);
sub.set('view engine', 'hbs');
sub.set('views', path.join(__dirname, './views/default'));

sub.get('/', function(req, res) {
  res.render('index');
});

module.exports = sub;