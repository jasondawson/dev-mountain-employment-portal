var StudentPortf = require('../models/studentPortf');
var User = require('../models/userSchema');
module.exports = {

  create: function(req, res) {
    console.log('this is studentPortf req', req.body);
    var newstudentPortf = new StudentPortf(req.body);
    newstudentPortf.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result)
      console.log('this is studentPortf send result', result);
    });
  },
  read: function(req, res) {
    StudentPortf.find(req.query).exec(function(err, result) {
      console.log('this is studentPortf read result STCRtl', result);
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  getStudentById: function(req, res) {
    //console.log("$$$$$$$$$$$$$", req.params);
    User.findById({
      _id: req.params.id
    })

    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      //console.log('this is result', result);
      var studentPortfolio = {};
      var userId = result._id;
      console.log('this is userId', userId);

      StudentPortf.findOne({
          loginInfo: userId
        })
        .populate('cohort.cohortName cohort.cohortLocation cohort.className skills')
        //.populate('cohort.cohortLocation')
        .exec(function(err, result) {
          console.log('this is StudentPortf result', result);
          studentPortfolio.studentPortf = result;
          res.send(studentPortfolio);
        })
    })
  },

  update: function(req, res) {
    console.log('this is in studentPortf Update req', req);
    StudentPortf.findByIdAndUpdate(req.params.id, req.body, function(err,
      result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  delete: function(req, res) {
    StudentPortf.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }

  //end module.exports
}
