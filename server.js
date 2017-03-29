var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var hbs = require('hbs')
var mongoose = require('mongoose');

var homeController = require('./controllers/home.js')
var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');
var climbsController = require('./controllers/climbs.js');
// app variable, allows use of express methods
var app = express();

// ADD THE NAME OF YOUR DATABASE
mongoose.connect('mongodb://localhost/climb-app');

// app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(methodOverride('_method'));

app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

app.use('/', homeController);
app.use('/users', usersController);
app.use('/sessions', sessionsController);
app.use('/climbs', climbsController);

// // users route
// app.get('/users', function(req, res){
//   res.render('');
// });

var port = 4000;

app.listen(port, function(err, res){
	if(err){
		console.log('you have a server error');
	}
	else {
		console.log('your server has started!');
	}
});



