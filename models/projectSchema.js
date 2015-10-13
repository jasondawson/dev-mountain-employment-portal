var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var projectInfo = new Schema({
    picture: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    projectType: {
            type: String
    },
    codeSource: {
        name: {
            type: String,
            //uppercase: true
        },
        url: {
            type: String
        }
    },
    techUsed: {
        type: String
    }

});


module.exports = Mongoose.model('ProjectInfo', projectInfo);
