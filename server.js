//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();

//middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

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
