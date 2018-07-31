const express = require('express');
const app = express();
const db = require('./db');
const passport = require('passport');


const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const ProfileController = require('./controllers/ProfileController');
const PostController = require('./controllers/PostController');


// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
// app.use('/users', UserController);
app.use('/auth', AuthController);
app.use('/profile', ProfileController);
app.use('/posts', PostController);

module.exports = app;