app.service("cohortLocServ", function($http, $q) {

  this.getCohortLoc=function(){
    var deferred=$q.defer();
    $http({
      url: '/api/cohortLocation',
      method: 'GET',
      // data: data
    }).then(function(response) {
      deferred.resolve(response);
    })
    return deferred.promise;
  }



  this.UpdateCohortLoc = function (cohortLoc) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: '/api/cohortLocation',
      data: {

        text: cohortLoc.text
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };


this.addCohortLoc = function (cohortLoc) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: '/api/cohortLocation',
      data: {

        text: cohortLoc.text
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };


  this.deleteCohortLoc = function (cohortLoc) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: '/api/cohortLocation/' + cohortLoc._id
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };




});
