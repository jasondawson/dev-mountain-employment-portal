var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var studentPortf = new Schema({
  loginInfo:{type: Schema.Types.ObjectId, ref:'User'},
  email: { type: String, required: true, unique:true },
  picture:{type:String},//strign Amazon S3
	name: {
		first: {type: String, required: true},
		middle: {type: String},
		last: {type: String, required: true, index:true }
	},
  Bio: {type: String},
  resume: {type: String},// link or upload to amazon s3 that saves link to resume.
  skills:[{type: Schema.Types.ObjectId, ref:'Skill'}],
  currentLoc:{
  	city: {type: String, required: true},
  	state: {type: String, required: true},
  }
  //ASK RANDY HOW HE DID HIS PROJECT !!
  cohort: [{
    className:{type: String,
      enum: ['Web Development',
            'IOS']},
    cohortName:{type:String},
    cohortLocation:{
      enum:['Salt City, UT', 'Provo, UT', 'Dallas, TX']
    /*city: {type: String, required: true},
    state: {type: String, required: true},*/      
  }/*see how Randy did his project*/
  }],
  status;{
    enum:['Employed', 'Unemployed', 'Current Student', 'Freelance']
  },
  relocation:{
    enum:['Yes', 'No']
  },
  percentCompleted:{type:String},



});

module.exports = Mongoose.model('StudentPortf', studentPortf);