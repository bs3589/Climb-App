var express = require('express');
var router = express.Router();
var authHelpers = require('../helpers/auth.js')
var Climb = require('../models/climb.js');


router.get('/', function(req, res) {
    Climb.find({})
        .exec(function(err, climbs) {
            if(err) console.log(err);

            console.log(climbs);
            // res.send(climbs);
            res.render('home/index', {
                climbs: climbs
            });
        });
});

module.exports = router;