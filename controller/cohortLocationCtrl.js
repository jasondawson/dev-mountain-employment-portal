var cohortLoc = require('../models/cohortLocSche');

module.exports = {

  create: function(req, res) {
 
    var newCohortLoc = new cohortLoc(req.body);
    newCohortLoc.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result)
    
    });
  },
  read: function(req, res) {
    cohortLoc.find(req.query).exec(function(err, result) {
 
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
 
    cohortLoc.findByIdAndUpdate(req.params.id, req.body, function(err,
      result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  delete: function(req, res) {
    cohortLoc.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }

  //end module.exports
}