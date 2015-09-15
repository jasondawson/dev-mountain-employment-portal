app.service("loginSvc", function($http, $q) {

  this.logInUser = function(data) {
    var deferred = $q.defer();
    console.log('this is login', data);
    $http({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: data
      })
      .then(function(data) {
        console.log('this is loginSvc', data);
        deferred.resolve(data.data);
      })
    return deferred.promise;
  };

  this.register = function(data) {
    var deferred = $q.defer();
    console.log('this is register', data);
    $http({
        url: 'http://localhost:3000/api/user',
        method: 'POST',
        data: data
      })
      .then(function(data) {
        console.log('this is .then register', data);
        deferred.resolve(data.data);
      })
    return deferred.promise;
  };

  // end of service
});
