var Skills = require('../models/skill');

module.exports = {
    create: function(req, res) {
        var newSkill = new Skills(req.body);
        newSkill.save(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result)
        });
    },
    read: function(req, res) {
        Skills.find(req.query).exec(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    }

    //end module.exports
}
