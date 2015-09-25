app.service("loginSvc", function($http, $q) {

var user = {};
this.getCurrentUser=function(){
  return user;
}
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
        user.Id = data.data;
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
    
  /*
  TODO:
    this.getLoggedInUser = function(){
        return {
           id:
           roles: ['student', 'lead_instructor']
        }
        
        //
        return $http.get('/urltheygaveme', .....
    }
  
  */

  // end of service
});
