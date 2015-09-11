var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var userSchema = new Schema({
	email: { type: String, required: true, unique:true },

	password:{
		type: String,
		minLength: 6,
	},
	role: {type:String,
	enum: [
	'student',
	'admin'
		]
	},
	

});
module.exports = Mongoose.model('User', userSchema);



