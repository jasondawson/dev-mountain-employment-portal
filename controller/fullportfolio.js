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
                // console.log('this is result', result);

                var fullPortfolio = {};
                var userId = result._id;
                // console.log('this is userId', userId)

                StudentPortf.findOne({
                        loginInfo: userId
                    }).exec(function(err, result) {
                        // console.log('this is StudentPortf result', result);
                        // if (err) return res.status(500).send(err);
                        fullPortfolio.studentPortf = result;
                    }),
                    Project.find({
                        loginInfo: userId
                    }).exec(function(err, result2) {
                        // console.log('this is Project result', result2);
                        // if (err) return res.status(500).send(err);
                        fullPortfolio.projects = result2;
                    }),
                    DevSkills.find({
                        loginInfo: userId
                    }).exec(function(err, result3) {
                        // console.log('this is DevSkills result', result3);
                        // if (err) return res.status(500).send(err);
                        fullPortfolio.devSkills = result3;
                        res.send(fullPortfolio);
                    })
                // console.log('this is fullPortfolio', fullPortfolio);


                //this is the end of User
            })
    }
}
