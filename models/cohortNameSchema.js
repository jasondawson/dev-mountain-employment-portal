var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var cohortName = new Schema({
  value: {type:Number},
  text: {type:String}
})
module.exports = Mongoose.model('CohortName', cohortName);