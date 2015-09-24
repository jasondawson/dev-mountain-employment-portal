var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var cohortLoc = new Schema({

    text: {
        type: String
    }
})
module.exports = Mongoose.model('CohortLoc', cohortLoc);