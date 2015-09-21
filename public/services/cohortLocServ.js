app.service("cohortLocServ", function($http, $q) {


  
  this.getCohortLoc=function(){
    var deferred=$q.defer();
    $http({
      url: 'http://localhost:3000/api/cohortLocation',
      method: 'GET',
      // data: data
    }).then(function(response) {
      console.log("cohort Locations collection", response.data)
      deferred.resolve(response.data);
    })
    return deferred.promise;
  }
      this.UpdateCohortLoc = function (cohortLoc) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:3000/api/cohortLocation',
      data: {
        value: cohortLoc.value,
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
      url: 'http://localhost:3000/api/cohortLocation',
      data: {
        value: cohortLoc.value,
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
      url: 'http://localhost:3000/api/cohortLocation/' + cohortLoc._id
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };




});