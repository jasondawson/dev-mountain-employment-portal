var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

/*var cohortName = new Schema({
  value: {type:Number},
  text: {type:String}
});*/
///CREATE A Chemas for ea of my list on student Controller so taht i can have those collections saved on my database and be able to create new lists!!!

var studentPortf = new Schema({
  loginInfo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  email: {
    type: String,
    // required: true,
    unique: true
  },
  picture: {
    type: String
  }, //strign Amazon S3
  name: {
    first: {
      type: String
        // required: true
    },
    middle: {
      type: String
    },
    last: {
      type: String,
      // required: true,
      index: true
    }
  },
  github: {
    type: String
  },
  personalWebsite: {
    type: String
  },
  linkdIn: {
    type: String
  },
  Bio: {
    type: String
  },
  resume: {
    type: String
  }, // link or upload to amazon s3 that saves link to resume.
  skills: [{
    type: Schema.Types.ObjectId,
    ref: 'Skill'
  }],
  currentLoc: {
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
  },
  //ASK RANDY HOW HE DID HIS PROJECT !!
  cohort: {
      className: {
        type: Number
      },
      cohortName: [{
          type: Schema.Types.ObjectId,
          ref: 'CohortName'
          }],
      cohortLocation: {
        type: Number
      } /*see how Randy did his project*/
  },
  status: {
    type: Number
  },
  relocation: {
    type: Number
  },
  percentCompleted: {
    type: String
  },



});

module.exports = Mongoose.model('StudentPortf', studentPortf);
