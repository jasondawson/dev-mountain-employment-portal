app.service("loginSvc", function($http, $q) {

//   var user = {
//     // Id:"55f8480baec60b07268b0f59",
//      Id:null,
//      roles: ['student', 'lead_instructor']
// }



  // this.getCurrentUser = function() {
  //   return user;
  // }


  // this.logInUser = function(data) {
  //   data.role = "student";
  //   var deferred = $q.defer();
  //   console.log('this is login', data);
  //   $http({
  //       url: 'http://localhost:3000/login',
  //       method: 'POST',
  //       data: data
  //     })
  //     .then(function(data) {
  //       user.Id = data.data;
  //       console.log('this is userid', user.Id);
  //       deferred.resolve(data.data);
  //     });
  //   return deferred.promise;
  // };


  // this.register = function(data) {
  //   var deferred = $q.defer();
  //   console.log('this is register', data);
  //   $http({
  //       url: 'http://localhost:3000/api/user',
  //       method: 'POST',
  //       data: data
  //     })
  //     .then(function(data) {
  //       console.log('this is .then register', data);
  //       deferred.resolve(data.data);

  //     })
  //   return deferred.promise;
  // };


  // this.getLoggedInUser = function() {
  //   return user;
  // }


  // TODO:
  // this.getLoggedInUser = function() {
  //   return user;


  /*var deferred = $q.defer();
  $http({
      url: '/urltheygaveme',
      method: 'GET'
    })
    .then(function(data) {
      deferred.resolve(data.data);
    })
  return deferred.promise;
        */

  //

  // end of service
});
