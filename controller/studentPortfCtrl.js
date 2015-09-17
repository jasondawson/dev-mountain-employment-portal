var StudentPortf = require('../models/studentPortf');

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
      console.log('this is studentPortf read result', result);
      if (err) return res.status(500).send(err);
      res.send(result);
    });
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
