var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/climb-app');

var Climb = require("../models/climb");

mongoose.promise = global.Promise;

Climb.remove({}, function(err) {
    console.log(err);
});

// seeds

var dreamscape = new Climb({
	name: 'Dreamscape'
	location:
});

var climbingRoute2 = new Climb({
	name: 'climbingRoute2'
});

var climbingRoute3 = new Climb({
	name: 'climbingRoute3'
});

var climbingRoute4 = new Climb({
	name: 'climbingRoute4'
});





// saves

dreamscape.save(function(err) {
  if (err) console.log(err);

  console.log('Dreamscape created!');
});