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
});



// saves

dreamscape.save(function(err) {
  if (err) console.log(err);

  console.log('Dreamscape created!');
});