app.service("studentProfileSvc", function($http, $q) {

    
    this.storeImage = function(imageData, filename) {
        var imageExtension = imageData.split(';')[0].split('/');
        imageExtension = imageExtension[imageExtension.length - 1];
        console.log(imageExtension);

        var newImage = {
            imageName: filename,
            imageBody: imageData,
            imageExtension: imageExtension,
            userEmail: 'ih8blackwidowspiders@gmail.com'
        }

        return $http.post('/api/newimage', newImage)
    }





});