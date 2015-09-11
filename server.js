//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
var router = express.Router();

//controllers

var userCtrl = require('./controller/userCtrl');
var skillsCtrl = require('./controller/skillsCtrl');
var devSkillsCtrl = require('./controller/devSkillsCtrl');


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
  .put(devSkillsCtrl.update)
  .get(devSkillsCtrl.read);

router.route('/api/devskills/:id')
  .put(devSkillsCtrl.update)
  .delete(devSkillsCtrl.delete);


//connections
var port = 3000;
var mongoUri = 'mongodb://localhost:27017/dvmtn-emp-portal';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to mongodb @', mongoUri);
})



var server = app.listen(process.env.PORT || port, function() {
  console.log('Server up and running at', server.address().port);
});
