var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js')


// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/signup', function(req, res){
	res.render('users/signup.hbs');
});

// must create a login page
router.post('/', authHelpers.createSecure, function(req, res){
	var email = req.body.email
	var hashPassword = res.hashedPassword

	var user = new User({
		email: email,
		password_digest: hashPassword
	})

	user.save()

	res.render('users/login.hbs')
});


module.exports = router;
