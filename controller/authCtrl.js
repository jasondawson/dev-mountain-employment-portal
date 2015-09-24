var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('../models/userSchema');

passport.use(new BasicStrategy(
    function(email, password, callback) {
        User.findOne({
            email: email
        }, function(err, user) {
            if (err) {
                return callback(err);
            }
            // No user found with that username
            if (!user) {
                return callback(null, false);
            }
            // Check that password is correct
            user.verifyPassword(password, function(err, isMatch) {
                if (err) {
                    return callback(err);
                }

                // If password does not match
                if (!isMatch) {
                    return callback(null, false);
                }

                // Success Yay!
                return callback(null, user);
            });
        });
    }
));

exports.isAuthenticated = passport.authenticate('basic', {
    session: false
});