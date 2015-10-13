var Mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = Mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    dm_id: {
        type: Number
    },
    roles: {
        type: Schema.Types.Mixed
    }
});


module.exports = Mongoose.model('User', userSchema);
