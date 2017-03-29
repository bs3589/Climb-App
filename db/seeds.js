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
	name: "The Nose",
	location: "Yosemite Valley, CA",
	grade: "5.9",
	category: "Trad",
	description: "This is a description for Yosemite",
	complete: true
});

var climbingRoute2 = new Climb({
	name: "Owl Rock Spire",
	location: "Georgia",
	grade: "5.8",
	category: "Trad",
	description: "This is a description for Owl",
	complete: true
});

var climbingRoute3 = new Climb({
	name: "The Orb",
	location: "Rocktown, GA",
	grade: "V8",
	category: "Bouldering",
	description: "This is a description for Rock",
	complete: true
});

var climbingRoute4 = new Climb({
	name: "Dreamscape",
	location: "Sandrock, AL",
	grade: "5.11d",
	category: "Sport",
	description: "This is a description for Sand",
	complete: true
});

// var routes = [climbingRoute1, climbingRoute2, climbingRoute3, climbingRoute4]

// user.climbs.push(routes[0])
// user.climbs.push(routes[1])
// user.climbs.push(routes[2])
// user.climbs.push(routes[3])

climbingRoute1.save()
climbingRoute2.save()
climbingRoute3.save()
climbingRoute4.save()

// saves

user.save(function(err) {
  if (err) console.log(err);

  console.log('User created!');
});