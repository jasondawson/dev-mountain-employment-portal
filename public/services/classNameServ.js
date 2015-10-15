app.service("classNameServ", function($http, $q) {

this.getClassName=function(){
    var deferred=$q.defer();
    $http({
      url: '/api/className',
      method: 'GET',
      // data: data
    }).then(function(response) {
      deferred.resolve(response);
    })
    return deferred.promise;
  }


this.UpdateClassName = function (className) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: '/api/className',
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
      url: '/api/className',
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
      url: '/api/className/' + className._id
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };




});
