var StudentPortf = require('../models/studentPortf');
var User = require('../models/userSchema');
var cohortLoc = require('../models/cohortLocSche');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;


CustomLogger = function() {
  this.active = true;
}


CustomLogger.prototype.deactivate = function() {
  this.active = false;
}
CustomLogger.prototype.activate = function() {
  this.active = true;
}
CustomLogger.prototype.log = function() {
  if (this.active) {
  }
}
var myLog = new CustomLogger();
// uncomment next line to turn console logs on
// myLog.deactivate();
module.exports = {
  create: function(req, res) {
    var newstudentPortf = new StudentPortf(req.body);
    newstudentPortf.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result)
    });
  },
  read: function(req, res) {
    StudentPortf.find(req.query)
    .populate(
        'cohort.cohortname cohort.className cohort.cohortLocation projects DevSkills '


      )
      .exec(function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      });
  },

  getStudentById: function(req, res) {
    myLog.log('\n\n\n\n\nthis is before! req.params ', req.params);

    User.findOne( {_id:req.params.id ? req.params.id : null}, function(err, userFindResult) {
        if (err) return res.status(500).send(err);
        var studentPortfolio = {};
        var userId = userFindResult._id;
        myLog.log('this is userId MEOW! ', userId);

        StudentPortf.findOne({loginInfo:userId})
          .populate(
            'cohort.cohortname cohort.cohortLocation cohort.className projects DevSkills loginInfo'
          )
          .exec(function(err, portfolioFindResult) {
            if (err || portfolioFindResult === null){

              studentPortfolio.studentPortf = new StudentPortf();
              var newLoginId = ObjectID.createFromHexString(req.params.id);
              studentPortfolio.studentPortf.loginInfo = newLoginId;
              studentPortfolio.studentPortf.save(function(newPortfolioError){
                console.log("error creating new portfolio",newPortfolioError);
                res.send(studentPortfolio);
              });
            } else{
              studentPortfolio.studentPortf = portfolioFindResult._doc;

            res.send(studentPortfolio);
          }
        })
    })
  },
  update: function(req, res) {
    StudentPortf.findOneAndUpdate({
        _id: req.params.id
      }, {
        $set: req.body
      }, {
        upsert: true
      },
      function(err, result) {
        if (err) {
          myLog.log("\n\n\n\nThere was an erro :-[", err);
          myLog.log("\n\n\n\n\n");
        } else {
          myLog.log("\n\n\n\n\nYESSSS!", result);
          myLog.log("\n\n\n\n\n");
        }
        res.send(result);
      });
  },



  delete: function(req, res) {
    StudentPortf.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  getCohorts: function(req, res) {
    var cohortId = req.params.id;
    StudentPortf.find().populate(

        'cohort.cohortname cohort.cohortLocation cohort.className projects '

      )
      .lean().exec(function(err, result) {
        var students = [];
        result.forEach(function(student) {
          var idWrapper = ObjectID.createFromHexString(cohortId);
          if (student.cohort.cohortname._id.id === idWrapper.id &&
            student.showProfile === true) {
            students.push(student);
          }
        })
        if (err) return res.status(500).send(err);
        res.send(students);
      })
  }


  //end module.exports
}
