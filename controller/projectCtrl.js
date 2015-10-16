var Project = require('../models/projectSchema');
var studentPort = require('../models/studentPortf');
module.exports = {

    create: function(req, res) {
        var newProject = new Project(req.body);
        newProject.save(function(err, result) {
            if (err) return res.status(500).send(err);

            studentPort.findByIdAndUpdate(req.params.studentId,
             {
                $push:{
                    "projects": result._id
                }
            },
            function(err, response){
            if (err) return res.status(500).send(err);
            res.send();
            }

            )

        });
    },
    read: function(req, res) {
        Project.find(req.query).exec(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    getbyId: function(req, res) {
        Project.find({
            loginInfo: '55f723dd5c39cb631af86f1a'
        }).exec(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    update: function(req, res) {
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
