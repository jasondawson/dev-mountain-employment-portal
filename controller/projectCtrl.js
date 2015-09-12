var Project = require('../models/projectSchema');

module.exports = {

  create: function(req, res) {
    console.log('this is Projects req', req.body);
    var newProject = new Project(req.body);
    newProject.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result)
      console.log('this is Skills send result', result);
    });
  },
  read: function(req, res) {
    Project.find(req.query).exec(function(err, result) {
      console.log('this is Project read result', result);
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    console.log('this is in Project Update req', req);
    Project.findByIdAndUpdate(req.params.id, req.body, function(err,
      result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  delete: function(req, res) {
    Project.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }

  //end module.exports
}
