var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/climb-app');

var User = require("../models/user");
var Climb = require("../models/climb");

mongoose.promise = global.Promise;

User.remove({}, function(err) {
    console.log(err);
});

Climb.remove({}, function(err) {
    console.log(err);
});

// seeds

var user = new User({
  email: 'climbon@email.com',
  password_digest: bcrypt.hashSync('climbon', bcrypt.genSaltSync(10)),
  climbs: []
});

var climbingRoute1 = new Climb({
	name: "Blood mountain",
	location: "Georgia",
	grade: "A+",
	complete: true
});

var climbingRoute2 = new Climb({
	name: "Blood mountain",
	location: "Georgia",
	grade: "A+",
	complete: true
});

var climbingRoute3 = new Climb({
	name: "Blood mountain",
	location: "Georgia",
	grade: "A+",
	complete: true
});

var climbingRoute4 = new Climb({
	name: "Blood mountain",
	location: "Georgia",
	grade: "A+",
	complete: true
});

var routes = [climbingRoute1, climbingRoute2, climbingRoute3, climbingRoute4]

user.climbs.push(routes[0])
user.climbs.push(routes[1])
user.climbs.push(routes[2])
user.climbs.push(routes[3])

// saves

user.save(function(err) {
  if (err) console.log(err);

  console.log('User created!');
});