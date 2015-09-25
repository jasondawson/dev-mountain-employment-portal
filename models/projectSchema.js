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
        type: String,
        enum: [
            'Personal',
            'Group'
        ]
    },
    codeSource: [{
        name: {
            type: String,
            //uppercase: true
        },
        url: {
            type: String
        }
    }],
    TechUsed: {
        type: String
    }

});


module.exports = Mongoose.model('ProjectInfo', projectInfo);