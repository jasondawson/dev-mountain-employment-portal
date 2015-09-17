var User = require('../models/userSchema');

module.exports = {
  create: function(req, res) {
    console.log('this is req', req.body);
    var newUser = new User(req.body);
    newUser.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result)
      console.log('this is send result', result);
    });
  },
  read: function(req, res) {
    User.find(req.query).exec(function(err, result) {
      console.log('this is read result', result);
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }

  //end module.exports
}
