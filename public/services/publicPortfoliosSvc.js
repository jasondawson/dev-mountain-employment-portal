app.service("publicPortfoliosSvc", function($http, $q) {

  this.getStudentProf = function() {
    var deferred = $q.defer();
    $http({
      url: 'http://localhost:3000/api/studentPortfolio',
      method: 'GET',
    }).then(function(response) {
      angular.forEach(response.data, function(student) {
        if (student.cohort.cohortLocation.text ===
          "Provo, UT" || "Salt Lake City, UT") {
          student.classLocation = "UT";
        }
        if (student.cohort.cohortLocation.text ===
          "Dallas, TX") {
          student.classLocation = "TX";
        }
        if (student.cohort.className.text ===
          "Web Development") {
          student.classType = "Web Development"
        }
        if (student.cohort.className.text === "IOS") {
          student.classType = "IOS";
        }
      })

      deferred.resolve(response.data);
    })
    return deferred.promise;
  }

  this.getByCohort = function() {
    var deferred = $q.defer(data);
    $http({
      url: 'http://localhost:3000/api/studentPortfolio',
      method: 'GET',
    }).then(function(response) {
      deferred.resolve(response.data);
    })
    return deferred.promise;
  }

  this.getStudentProj = function(data) {
      var deferred = $q.defer();
      $http({
        url: 'http://localhost:3000/api/projects/',
        method: 'GET',
        params: {
          id: data
        }
      }).then(function(response) {

        deferred.resolve(response.data);
      })
      return deferred.promise;
    }
    //end service

});
