var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var skill = new Schema({
  title: {type: String, required: true, unique: true}
});


module.exports = Mongoose.model('Skill', skill);