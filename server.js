//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var LocalStrategy = require("passport-local").Strategy;
var session = require('express-session');

var app = express();
var router = express.Router();

//controllers

var userCtrl = require('./controller/userCtrl');
var skillsCtrl = require('./controller/skillsCtrl');
var devSkillsCtrl = require('./controller/devSkillsCtrl');
var projectCtrl = require('./controller/projectCtrl');
var studentPortfCtrl = require('./controller/studentPortfCtrl');
var fullPortfolio = require('./controller/fullportfolio');
var authCtrl = require('./controller/authCtrl');

//middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(session({
  secret: "devmtnempportal",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.use(cors());

//models

var User = require('./models/userSchema');
//passport

passport.use(new LocalStrategy({
    usernameField: "email"
  },
  function(email, password, callback) {
    console.log('this is passport use', email, password);
    User.findOne({
      email: email
    }, function(err, user) {
      console.log("this is passport.use error", err);
      if (err) {
        return callback(err);
      }
      // If user isn't found with that username
      if (!user) {
        return callback(null, false);
      }
      // Make sure the password is correct
      user.verifyPassword(password, function(err, isMatch) {
        if (err) {
          return callback(err);
        }
        // Password did not match
        if (!isMatch) {
          return callback(null, false);
        }
        // Success
        return callback(null, user);
      });
    });
  }
));

//Serializing

passport.serializeUser(function(user, done) {
  console.log("userfound", done);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log("deserializeUser");
  done(null, user);
});


//endpoints

app.post('/login', function(req, res, next) {
  console.log('this is req', req.body);
  passport.authenticate('local', function(err, user, info) {
    console.log('this is login', user);
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log('user is not found');
      return res.redirect(302, '/#/login');
    }
    req.logIn(user, function(err) {
      console.log('is logIn', user);
      if (err) {
        return next(err);
      }
      return res.send(user);
    });
  })(req, res, next);
});

router.route('/api/user')
  .post(userCtrl.create)
  .get(authCtrl.isAuthenticated, userCtrl.read);

router.route('/api/skills')
  .post(authCtrl.isAuthenticated, skillsCtrl.create)
  .get(authCtrl.isAuthenticated, skillsCtrl.read);

router.route('/api/devskills')
  .post(authCtrl.isAuthenticated, devSkillsCtrl.create)
  .get(authCtrl.isAuthenticated, devSkillsCtrl.read);

router.route('/api/devskills/:id')
  .put(authCtrl.isAuthenticated, devSkillsCtrl.update)
  .delete(authCtrl.isAuthenticated, devSkillsCtrl.delete);

router.route('/api/project')
  .post(authCtrl.isAuthenticated, projectCtrl.create)
  .get(authCtrl.isAuthenticated, projectCtrl.read);

router.route('/api/project/:id')
  .put(authCtrl.isAuthenticated, projectCtrl.update)
  .delete(authCtrl.isAuthenticated, projectCtrl.delete);

router.route('/api/studentPorftolio')
  .post(authCtrl.isAuthenticated, studentPortfCtrl.create)
  .get(authCtrl.isAuthenticated, studentPortfCtrl.read);

router.route('/api/studentPorftolio/:id')
  .put(authCtrl.isAuthenticated, studentPortfCtrl.update)
  .delete(authCtrl.isAuthenticated, studentPortfCtrl.delete);

//the fullportfolio end point is for the publicStudentProfile.html view

router.route('/api/fullPortfolio/:id')
  .get(authCtrl.isAuthenticated, fullPortfolio.getPortfolio);

//connections
var mongodbUri = 'mongodb://adriana:group@ds033317.mongolab.com:33317/devmtn';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongodbUri);
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log('Connected to mongodb @', mongodbUri);
})



var port = 3000;

var server = app.listen(process.env.PORT || port, function() {
  console.log('Server up and running at', server.address().port);
});
