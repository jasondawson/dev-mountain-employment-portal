var Mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = Mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        minLength: 6,
    },
    role: {
        type: String,
        enum: [
            'student',
            'admin'
        ]
    }
});

userSchema.pre('save', function(callback) {
    var user = this;
    // Break out if the password hasn't changed
    if (!user.isModified('password')) return callback();

    // Password changed so we need to hash it
    bcrypt.genSalt(5, function(err, salt) {
        if (err) return callback(err);
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) return callback(err);
            user.password = hash;
            callback();
        });
    });
});

// Password match
userSchema.methods.verifyPassword = function(password, cb) {
    console.log('this is userSchema verify password', password)
    var user = this;
    bcrypt.compare(password, user.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
module.exports = Mongoose.model('User', userSchema);