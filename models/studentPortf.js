var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;


///CREATE A Chemas for ea of my list on student Controller so taht i can have those collections saved on my database and be able to create new lists!!!

var studentPortf = new Schema({
  loginInfo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  email: {
    type: String //,
    // required: true,
    // unique: true
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
<<<<<<< HEAD
  skills: {type: String},
=======
  skills: {
    type: String
  },
>>>>>>> ea6c48493abc7aff1bc591ddc6b0eb239ab44659
  OrSkillString: {
    type: String
  },
  currentLoc: {
    city: {
      type: String
    },
    state: {
      type: String
    },
  },
  //ASK RANDY HOW HE DID HIS PROJECT !!
  cohort: {
    className: {
      type: Schema.Types.ObjectId,
      ref: 'CohortClassName'
    },
    cohortname: {
      type: Schema.Types.ObjectId,
      ref: 'CohortName'
    },
    cohortLocation: {
      type: Schema.Types.ObjectId,
      ref: 'CohortLoc'
    } /*see how Randy did his project*/
  },
  status: {
    text: {
      type: String
    }
  },
  relocation: {

    text: {
      type: String
    }
  },
  percentCompleted: {
    type: Number
  },
  showProfile: {
    type: Boolean,
    default: false
  },
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'ProjectInfo'
  }],
  DevSkills: [{
    type: Schema.Types.ObjectId,
    ref: 'DevSkill'
  }]

});

module.exports = Mongoose.model('StudentPortf', studentPortf);
