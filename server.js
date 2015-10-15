//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var passport = require('passport');
// var bcrypt = require('bcrypt-nodejs');
// var LocalStrategy = require("passport-local").Strategy;
var Devmtn = require('devmtn-auth');
var DevmtnStrategy = Devmtn.Strategy;
var devmtnAuthConfig = require('./devmtnAuthConfig.js')
var session = require('express-session');
var multipart = require('connect-multiparty')
var morgan = require('morgan');


var app = express();
var router = express.Router();

//controllers

var config = require('./controller/config.js');
var userCtrl = require('./controller/userCtrl');
var skillsCtrl = require('./controller/skillsCtrl');
var devSkillsCtrl = require('./controller/devSkillsCtrl');
var projectCtrl = require('./controller/projectCtrl');
var cohortNameCtrl = require('./controller/cohortNameCtrl');
var classNameCtrl = require('./controller/classNameCtrl');
var cohortLocationCtrl = require('./controller/cohortLocationCtrl');
var studentSkillsCtrl = require('./controller/studentSkillsCtrl');
var studentPortfCtrl = require('./controller/studentPortfCtrl');
var fullPortfolio = require('./controller/fullportfolio');
var projectsCtrl = require('./controller/projectsCtrl')
var imageController = require("./controller/imageController.js");

//middleware

app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: config.sessionSecret,
  resave: true,
  saveUninitialized: true
}));
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.use(cors());
app.use('/upload/image', multipart());


//models

var User = require('./models/userSchema');
var Portfolios = require('./models/studentPortf')
//passport

passport.use('devmtn', new DevmtnStrategy(devmtnAuthConfig, function(user, done) {
  // Find or create a user in your database here and return your user.

  userCtrl.findOrCreate(user, function(err, results) {
      if (err) {
        return res.json({
          success: false,
          message: 'Error. User not found/created'
        })
      }
      var local_user = results;
    local_user.lead_instructor = Devmtn.checkRoles(local_user, 'lead_instructor');
    local_user.student = Devmtn.checkRoles(local_user, 'student');
    return done(null, local_user)
  })

}))


//Serializing

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    if (err) {
      return done(err)
    }
    return done(null, user)
  })
});


//endpoints

app.post('/api/newimage', imageController.saveImage);

// /////////////Biginning of Dev Mountain Auth//////////////


app.get('/auth/devmtn', passport.authenticate('devmtn'));

app.get('/auth/devmtn/callback', passport.authenticate('devmtn'), function(req, res) {
  if (req.user.lead_instructor) {
    res.redirect('/#/admin');
  } else if (req.user.student) {
    res.redirect('/#/profile/' + req.user._id)
  } else {
    res.redirect('/#/portfolioview')
  }
})

app.get('/auth/devmtn/logout', function(req, res) {
  req.logout();
  res.redirect('/#/')
})

app.get('/auth/currentUser', function(req, res) {
  if (req.user) {
    var userWithRoles = {user: req.user}
    if (Devmtn.checkRoles(req.user, 'student')) {
      userWithRoles.student = true;
    }
    if (Devmtn.checkRoles(req.user, 'lead_instructor')) {
      userWithRoles.lead_instructor = true;
    }
    res.json(userWithRoles);

  } else {
    res.send();
  }
})

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.end();
}



/////////////End of Dev Mountain Auth///////////////////





router.route('/api/user')
  .post(userCtrl.create)
  .get(ensureAuthenticated, userCtrl.read);

router.route('/api/skills')
  .post(ensureAuthenticated, skillsCtrl.create)
  .get(ensureAuthenticated, skillsCtrl.read);

router.route('/api/devskills')
  .post(ensureAuthenticated, devSkillsCtrl.create)
  .get(ensureAuthenticated, devSkillsCtrl.read);

router.route('/api/devskills/:id')
  .put(ensureAuthenticated, devSkillsCtrl.update)
  .delete(ensureAuthenticated, devSkillsCtrl.delete);

//Using this one to create new skill on StudentProfileEdit.html//////
router.route('/api/devskill/:studentId')
  .post(ensureAuthenticated, devSkillsCtrl.create);
router.route('/api/devskill/:id')
  .delete(devSkillsCtrl.delete)
  .put(devSkillsCtrl.update);

///////////////////////////////////////////////////////////////////////

router.route('/api/project/:studentId')
  .post(ensureAuthenticated, projectCtrl.create)
  .get(ensureAuthenticated, projectCtrl.read);
router.route('/api/project/:id')
  .delete(ensureAuthenticated, projectCtrl.delete);


router.route('/api/studentPorftolio')
  .post( /*ensureAuthenticated,*/ studentPortfCtrl.create);

router.route('/api/updateProject/:id')
  .put( /*ensureAuthenticated,*/ projectCtrl.update)
  .delete(ensureAuthenticated, projectCtrl.delete);

router.route('/api/projects')
  .get(projectsCtrl.read);

router.route('/api/studentPortfolio')
  .get(studentPortfCtrl.read);

router.route('/api/studentPortfolio/:id')
  .get(studentPortfCtrl.getStudentById)// Using This one for editable forms on PublicStudentProfile.html
  .post(ensureAuthenticated, studentPortfCtrl.create)
  .put(ensureAuthenticated, studentPortfCtrl.update)
  .delete(ensureAuthenticated, studentPortfCtrl.delete);

router.route('/api/cohortName')
  .post(ensureAuthenticated, cohortNameCtrl.create)
  .get(cohortNameCtrl.read);

router.route('/api/cohortName/:id')
  .put(ensureAuthenticated, cohortNameCtrl.update)
  .delete(ensureAuthenticated, cohortNameCtrl.delete);

// router.route('/cohortLocation')
//   .get(cohortLocationCtrl.read);

router.route('/api/cohortLocation')
  .post(ensureAuthenticated, cohortLocationCtrl.create)
  .get( /*ensureAuthenticated,*/ cohortLocationCtrl.read);

router.route('/api/cohortLocation/:id')
  .put(ensureAuthenticated, cohortLocationCtrl.update)
  .delete(ensureAuthenticated, cohortLocationCtrl.delete);

router.route('/api/className')
  .post(ensureAuthenticated, classNameCtrl.create)
  .get(ensureAuthenticated, classNameCtrl.read);

router.route('/api/className/:id')
  .put(ensureAuthenticated, classNameCtrl.update)
  .delete(ensureAuthenticated, classNameCtrl.delete);

router.route('/api/studentSkills')
  .post(ensureAuthenticated, studentSkillsCtrl.create)
  .get(ensureAuthenticated, studentSkillsCtrl.read);

router.route('/api/studentSkills/:id')
  .put(ensureAuthenticated, studentSkillsCtrl.update)
  .delete(ensureAuthenticated, studentSkillsCtrl.delete);
//the fullportfolio end point is for the publicStudentProfile.html view

router.route('/api/fullPortfolio/:id')
  .get(ensureAuthenticated, fullPortfolio.getPortfolio);

//this the end point for getting students by Cohort
router.route('/api/getCohort/:id')
  .get(studentPortfCtrl.getCohorts);

//this is the end point for getting student in public view

router.route('/api/student/:id')
  .get(studentPortfCtrl.getStudentById);



//connections
// var mongodbUri = 'mongodb://adriana:group@ds033317.mongolab.com:33317/devmtn';
var mongodbUri = 'mongodb://localhost/devmtnep';
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
