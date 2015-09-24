var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var projectInfo = new Schema({
    loginInfo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    picture: {
        type: String
    }, // AMAZON S# string? or link?
    name: {
        type: String
    },
    description: {
        type: String
    },
    projectType: {
        type: String,
        enum: [
            'personal',
            'group'
        ]
    },
    codeSource: [{
        name: {
            type: String,
            uppercase: true
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