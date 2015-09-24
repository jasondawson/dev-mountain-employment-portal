app.service("cohortNameServ", function($http, $q) {

  this.getCohortNames=function(){
    console.log("service get cohort names");
    var deferred=$q.defer();
    $http({
      method: 'GET',
     url: 'http://localhost:3000/api/cohortName'
    }).then(function(response) {
      console.log("cohort names response in service", response)
      deferred.resolve(response);
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