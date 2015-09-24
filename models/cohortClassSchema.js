var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var cohortClassName = new Schema({

    text: {
        type: String
    }
})
module.exports = Mongoose.model('CohortClassName', cohortClassName);