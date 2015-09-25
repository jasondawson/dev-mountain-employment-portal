var Skills = require('../models/skill');

module.exports = {
    create: function(req, res) {
        console.log('this is Skills req', req.body);
        var newSkill = new Skills(req.body);
        newSkill.save(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result)
            console.log('this is Skills send result', result);
        });
    },
    read: function(req, res) {
        Skills.find(req.query).exec(function(err, result) {
           // console.log('this is Skills read result', result);
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    }

    //end module.exports
}