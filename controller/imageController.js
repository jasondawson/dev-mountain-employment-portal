var AWS = require('aws-sdk');
var keys = require('./keys.js');

AWS.config.update({
    accessKeyId: keys.amazonAccess,
    secretAccessKey: keys.amazonSecret,
    region: keys.amazonRegion
});

var s3 = new AWS.S3();

module.exports = {

    saveImage: function(req, res) {
        console.log(req.body);
        buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        var bucketName = 'devmountainemploymentportal/' + req.body.userEmail;

        var params = {
            Bucket: bucketName,
            Key: req.body.imageName,
            Body: buf,
            ContentType: 'image/' + req.body.imageExtension,
            ACL: 'public-read'
        };

        s3.upload(params, function(err, data) {
            console.log(err);
            if (err) return res.status(500).send(err);
            res.json(data);
        });
    }
}