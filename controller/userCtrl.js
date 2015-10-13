var User = require('../models/userSchema');

module.exports = {
    create: function(req, res) {
        // console.log('this is req', req.body);
        var newUser = new User(req.body);
        newUser.save(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result)
            // console.log('this is send result', result);
        });
    },
    read: function(req, res) {
        User.find(req.query).exec(function(err, result) {
            // console.log('this is read result', result);
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },
    findOrCreate: function(dm_user, cb) {
        User.findOne({email: dm_user.email})
            .exec(function(err, user) {
                if (err) {
                    console.log(err)
                    cb(err);
                }
                if (!user) {
                    // create the user
                    User.create({
                        email: dm_user.email,
                        dm_id: dm_user.id,
                        roles: dm_user.roles
                    }, function(err, newUser) {
                        cb(null, newUser)
                    })
                } else {
                    cb(null, user);
                }
            })
    }

    //end module.exports
}
