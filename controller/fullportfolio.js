var StudentPortf = require('../models/studentPortf');
var Project = require('../models/projectSchema');
var DevSkills = require('../models/DevSkills');
var Skills = require('../models/skill');
var User = require('../models/userSchema');


module.exports = {

    getPortfolio: function(req, res) {

        User.findById({
                _id: req.params.id
            })
            .exec(function(err, result) {
                if (err) return res.status(500).send(err);

                var fullPortfolio = {};
                var userId = result._id;

                StudentPortf.findOne({
                        loginInfo: userId
                    }).exec(function(err, result) {
                        // if (err) return res.status(500).send(err);
                        fullPortfolio.studentPortf = result;
                    }),
                    Project.find({
                        loginInfo: userId
                    }).exec(function(err, result2) {
                        // if (err) return res.status(500).send(err);
                        fullPortfolio.projects = result2;
                    }),
                    DevSkills.find({
                        loginInfo: userId
                    }).exec(function(err, result3) {
                        // if (err) return res.status(500).send(err);
                        fullPortfolio.devSkills = result3;
                        res.send(fullPortfolio);
                    })


                //this is the end of User
            })
    }
}
