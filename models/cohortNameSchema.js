var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var cohortName = new Schema({

    text: {
        type: String
    }
})
module.exports = Mongoose.model('CohortName', cohortName);