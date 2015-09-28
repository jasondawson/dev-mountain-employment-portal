var Project = require('../models/projectSchema');

module.exports = {

    create: function(req, res) {
        console.log('this is Projects req', req.body);
        var newProject = new Project(req.body);
        newProject.save(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result)
            
        });
    },
    read: function(req, res) {
        Project.find(req.query).exec(function(err, result) {
           // console.log('this is Project read result', result);
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    getbyId: function(req, res) {
        console.log('this is project get by id', req.body);
        Project.find({
            loginInfo: '55f723dd5c39cb631af86f1a'
        }).exec(function(err, result) {
            console.log('this is Project read result', result);
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    // Project.find({
    //   loginInfo: userId
    // }).exec(function(err, result2) {
    //   console.log('this is Project result', result2);
    //   // if (err) return res.status(500).send(err);
    //   fullPortfolio.projects = result2;
    // })

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