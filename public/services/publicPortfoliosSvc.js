app.service("publicPortfoliosSvc", function($http, $q) {

  this.getStudentProf = function() {
    var deferred = $q.defer();
    $http({
      url: 'http://localhost:3000/api/studentPortfolio',
      method: 'GET',
    }).then(function(response) {
      angular.forEach(response.data, function(student) {
        if (student.cohort.className.text === "Web Development") {
          student.classType = "Web Development"
        } else if (student.cohort.className.text === "IOS") {
          student.classType = "IOS";
        } else if (student.cohort.cohortLocation.text ===
          "Provo, UT" || "Salt Lake City, UT") {
          student.classLocation = "UT";
        } else if (student.cohort.cohortLocation.text ===
          "Dallas, TX") {
          student.classLocation = "TX";
        }
      })

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
