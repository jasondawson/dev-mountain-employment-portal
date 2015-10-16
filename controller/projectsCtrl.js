var Projects = require('../models/projectSchema');

module.exports = {

    read: function(req, res) {
        Projects.find({
            loginInfo: req.query.id
        }).exec(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

}
