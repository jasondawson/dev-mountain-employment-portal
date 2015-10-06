var DevSkills = require('../models/DevSkills');
var studentPort = require('../models/studentPortf');
module.exports = {

    create: function(req, res) {
        console.log('this is Skills req', req.body);
        var newDevSkills = new DevSkills(req.body);
        newDevSkills.save(function(err, result) {
            if (err) return res.status(500).send(err);
            studentPort.findByIdAndUpdate(req.params.studentId,{
                $push:{
                    "DevSkills":result._id
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
        DevSkills.find(req.query).exec(function(err, result) {
            console.log('this is Skills read result', result);
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    update: function(req, res) {
        console.log('this is in devSkills Update req', req);
        DevSkills.findByIdAndUpdate(req.params.id, req.body, function(err,
            result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    delete: function(req, res) {
        DevSkills.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    }

    //end module.exports
}