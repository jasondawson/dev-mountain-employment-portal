app.service("cohortNameServ", function($http, $q) {

  this.getCohortName=function(){
    var deferred=$q.defer();
    $http({
      url: 'http://localhost:3000/api/cohortName',
      method: 'GET',
     
    }).then(function(response) {
      //console.log("cohort collection", response.data)
      deferred.resolve(response.data);
    })
    return deferred.promise;
  }
      this.UpdateCohortName = function (cohortName) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:3000/api/cohortName',
      data: {
       
        text: cohortName.text
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
    this.addCohortName = function (cohortName) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://localhost:3000/api/cohortName',
      data: {
        
        text: cohortName.text
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
    this.deleteCohortName = function (cohortName) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://localhost:3000/api/cohortName/' + cohortName._id
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };




});