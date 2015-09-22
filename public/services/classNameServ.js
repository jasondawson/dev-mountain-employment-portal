app.service("classNameServ", function($http, $q) {

this.getClassName=function(){
    var deferred=$q.defer();
    $http({
      url: 'http://localhost:3000/api/className',
      method: 'GET',
      // data: data
    }).then(function(response) {
      // console.log("class Name collection from service", response)
      deferred.resolve(response);
    })
    return deferred.promise;
  }
     

this.UpdateClassName = function (className) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:3000/api/className',
      data: {
       
        text: className.text
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
    

this.addClassName = function (className) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://localhost:3000/api/className',
      data: {
        
        text: className.text
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
    

this.deleteClassName = function (className) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://localhost:3000/api/className/' + className._id
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };




});