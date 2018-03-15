var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// Beskriv hur en use ska se ut
var UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        maxlength: [20, 'You can not have more than 20 characters in name'],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type:String, 
        minlength: [8, 'Password must be longer then 8 characters'],
        required: true
    }
});

UserSchema.pre('save', function(next) {
    var user = this;
    var saltRounds = 5;

    // TODO: fail-safe here if password is not changed
    if (!user.isModified('password')) next();

    bcrypt.genSalt(saltRounds, function(error, salt) {
        if (error) return next(error);

        bcrypt.hash(user.password, salt, function(error, hash) {
          if (error) return next(error);
          
          user.password = hash;
          next();
        })
    })
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');