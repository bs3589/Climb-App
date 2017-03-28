var express = require('express');
var router = express.Router();
var Climb = require('../models/climb.js');
var authHelpers = require('../helpers/auth.js')


// index climbs
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



// new climb
router.get('/new', function(req, res) {
    res.render('climbs/new');
});

// create climb
router.post('/', function(req, res) {
    var climb = new Climb({
        name: req.body.name
        
    });
    climb.save(function(err, climb){
        if (err) { console.log(err); }

        console.log(climb);
        // res.send(climb);
        res.render('climbs/show', {
            climb: climb
        });
    });
});

// show climb
router.get('/:id', function(req, res) {
    Climb.findById(req.params.id)
        .exec(function(err, climb) {
            if(err) console.log(err);

            console.log(climb);
            // res.send(climb);
            res.render('climbs/show', {
                climb: climb
            });
        });
});

// edit climb
router.get('/:id/edit', function(req,res) {
    Climb.findById(req.params.id)
    .exec(function(err, climb) {
        if (err) { console.log(err); }

        res.render('climbs/edit', {
            climb: climb
        });
    });
});

// update climb
router.patch('/:id', function(req, res) {
    Climb.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        location: req.body.location,
        grade: req.body.grade,
        complete: req.body.complete
    }, {new: true})
        .exec(function(err, climb) {
            if (err) { console.log(err); }

            console.log(climb);
            // res.send(climb);
            res.render('climbs/show', {
                climb: climb
            });
        });
});

// delete climb
router.delete('/:id', function(req, res) {
    Climb.findByIdAndRemove(req.params.id)
        .exec(function(err, climb) {
            if (err) { console.log(err); }

            console.log('Climb deleted.');
            // res.send('Climb deleted.');
            // redirect back to the index route
            res.redirect('/climbs'); 
        });
});



module.exports = router;
