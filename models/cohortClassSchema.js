var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var cohortClassName = new Schema({
  value: {type:Number},
  text: {type:String}
})
module.exports = Mongoose.model('CohortClassName', cohortClassName);