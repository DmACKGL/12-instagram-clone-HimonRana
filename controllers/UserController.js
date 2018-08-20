const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded( {extended: true} ));
router.use(bodyParser.json());

const User = require('../models/User');

// @Route   GET /users/
// @Desc    Home route
// @Access  Public
router.get('/', function(req, res) {
    User.find({}, function(error, users) {
        if (error) {
            return res.status(500).send("An error occurred while trying to get the users from the database");
        } else {
            res.status(200).send(users);
        }
    })
});

router.get('/:id', function(req, res) {
    User.findById(req.params.id, function(error, user) {
        if (error) {
            return res.status(500).send("An error occurred while trying to find the user from the database");
        } else {
            res.status(200).send(user);
        }
    })
});

router.delete('/:id', function(req, res) { 
    User.findByIdAndRemove(req.params.id, function(error, user) {
        if (error) {
            return res.status(500).send("An error occurred while trying to delete the user from the database");
        } else {
            res.status(200).send("user " + user.name + " was succesfully deleted.");
        }
    })
});

router.put('/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(error, user) {
        if (error) {
            return res.status(500).send("An error occurred while trying to update the user from the database");
        } else {
            res.status(200).send(user + " was succesfully updated.");
        }
    })
});

module.exports = router;