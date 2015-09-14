//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

var app = express();
var router = express.Router();

//controllers

var userCtrl = require('./controller/userCtrl');
var skillsCtrl = require('./controller/skillsCtrl');
var devSkillsCtrl = require('./controller/devSkillsCtrl');
var projectCtrl = require('./controller/projectCtrl');
var studentPortfCtrl = require('./controller/studentPortfCtrl');

//middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(router);
app.use(cors());

//endpoints

router.route('/api/user')
  .post(userCtrl.create)
  .get(userCtrl.read);

router.route('/api/skills')
  .post(skillsCtrl.create)
  .get(skillsCtrl.read);

router.route('/api/devskills')
  .post(devSkillsCtrl.create)
  .get(devSkillsCtrl.read);

router.route('/api/devskills/:id')
  .put(devSkillsCtrl.update)
  .delete(devSkillsCtrl.delete);

router.route('/api/project')
  .post(projectCtrl.create)
  .get(projectCtrl.read);

router.route('/api/project/:id')
  .put(projectCtrl.update)
  .delete(projectCtrl.delete);

router.route('/api/studentPorftolio')
  .post(studentPortfCtrl.create)
  .get(studentPortfCtrl.read);

router.route('/api/studentPorftolio/:id')
  .put(studentPortfCtrl.update)
  .delete(studentPortfCtrl.delete);


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
