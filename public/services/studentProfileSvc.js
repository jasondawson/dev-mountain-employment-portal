app.service("studentProfileSvc", function($http, $q, loginSvc) {


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

  this.getStudentProf = function() {
    var deferred = $q.defer();
   var me = loginSvc.getCurrentUser();

    $http({
      url: 'http://localhost:3000/api/studentPorftolio/'+ me.Id,//
      method: 'GET',
      // data: data
    }).then(function(response) {
      //console.log('this is response.data in service', response.data);
      deferred.resolve(response.data);
    })
    return deferred.promise;
  }

  


});
