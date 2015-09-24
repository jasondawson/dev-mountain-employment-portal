var studentSkills = require('../models/skill');

module.exports = {

    create: function(req, res) {

        var newstudentSkills = new studentSkills(req.body);
        newstudentSkills.save(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result)

        });
    },
    read: function(req, res) {
        studentSkills.find(req.query).exec(function(err, result) {
            console.log(result);
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    update: function(req, res) {

        studentSkills.findByIdAndUpdate(req.params.id, req.body, function(err,
            result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    delete: function(req, res) {
        studentSkills.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    }

    //end module.exports
}