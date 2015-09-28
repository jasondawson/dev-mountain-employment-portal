var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var devSkill = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    link: {
        name: {
            type: String,
            uppercase: true
        },
        url: {
            type: String
        }
    }
});


module.exports = Mongoose.model('DevSkill', devSkill);