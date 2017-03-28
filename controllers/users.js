var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js')


// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/signup', function(req, res){
});

router.post('/', authHelpers.createSecure, function(req, res){
});

module.exports = router;
