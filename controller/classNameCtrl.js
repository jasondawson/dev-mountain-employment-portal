var cohortClassName = require('../models/cohortClassSchema');

module.exports = {

    create: function(req, res) {

        var newCohortClassName = new cohortClassName(req.body);
        newCohortClassName.save(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result)

        });
    },
    read: function(req, res) {
        cohortClassName.find(req.query).exec(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    update: function(req, res) {

        cohortClassName.findByIdAndUpdate(req.params.id, req.body, function(err,
            result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    delete: function(req, res) {
        cohortClassName.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    }

    //end module.exports
}
