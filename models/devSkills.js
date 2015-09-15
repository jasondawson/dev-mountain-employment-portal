var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var devSkill = new Schema({
	loginInfo: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	description: {
		type: String
	},
	link: [{
		name: {
			type: String,
			uppercase: true
		},
		url: {
			type: String
		}
	}]
});


module.exports = Mongoose.model('DevSkill', devSkill);
