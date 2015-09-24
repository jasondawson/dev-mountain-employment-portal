var cohortName = require('../models/cohortNameSchema');

module.exports = {


    create: function(req, res) {

        var newCohortName = new cohortName(req.body);
        newCohortName.save(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result)
            console.log('this is cohortName send result', result);
        });
    },
    read: function(req, res) {
        cohortName.find(req.query).exec(function(err, result) {
            console.log(result);
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    update: function(req, res) {

        cohortName.findByIdAndUpdate(req.params.id, req.body, function(err,
            result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    delete: function(req, res) {
        cohortName.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    }

    //end module.exports

}