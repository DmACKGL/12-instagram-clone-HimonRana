var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var config = require('../config');

router.use(bodyParser.urlencoded( {extended: true} ));
router.use(bodyParser.json());

var User = require('../models/User');
var TokenVerify = require('../middleware/TokenVerify')

// @Route   POST auth/login
// @Desc    Login route
// @Access  Public
router.post('/login', function(req, res) {
    User.findOne( {email: req.body.email }, function(error, user) {
        if (error) return res.status(500).send('An error occured while trying to login with the user.');

        if (!user) return res.status(404).send('No registered user found with that email.');

        // Compare passwords
        var isValidPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!isValidPassword) return res.status(401).send({
            authenticated: false,
            token: null
        });
        
        var token = jwt.sign( {id: user._id}, config.secret, {
            expiresIn: 86400 // Valid in seconds = 24 hours
        });

        // Remove the password before returning
        delete user.password;
        
        // if everything goes according plan
         return res.status(200).send({
                authenticated: true,
                user: user,
                token: token
        });
    })
})

// Auth_Create register
router.post('/register', function(req, res) {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, function(error, user) {
        // This is a callback
        if (error) {
            return res.status(500).send("An error occurred while trying to add information to the database " + error);
        } else {
            // Create a JWT token
            return res.status(200).send({ user: user });
            
        }
    });
});

router.get('/me', TokenVerify, function(req, res) {
    // Hitta user med hjälp av Token.id

    User.findById(req.userId, { password: 0 }, function(error, user) {
        if (error) {
            res.status(500).send('An error occured while trying to find the user.');
        }
        if (!user) {
            res.status(404).send('User not found');
        }

        res.status(200).send({
            authenticated: true,
            user: user
        })
    })

})

module.exports = router;