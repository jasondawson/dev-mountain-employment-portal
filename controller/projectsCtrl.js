var Projects = require('../models/projectSchema');

module.exports = {

    read: function(req, res) {
        console.log('this is project get by id', req.query.id);
        Projects.find({
            loginInfo: req.query.id
        }).exec(function(err, result) {
            console.log('this is Project read result', result);
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

}