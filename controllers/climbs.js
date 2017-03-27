var express = require('express');
var router = express.Router();
var Climb = require('../models/climb.js');
var authHelpers = require('../helpers/auth.js')

// index authors
router.get('/', function(req, res) {
    // res.send('climbs will be here');
    Climb.find({})
        .exec(function(err, climbs) {
            if(err) console.log(err);

            console.log(climbs);
            // res.send(climbs);
            res.render('climbs/index', {
                  climbs: climbs
            });
        });
});


module.exports = router;
