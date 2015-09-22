app.service("studentSkillsService", function($http, $q) {

  this.getStudentSkills=function(){
    var deferred=$q.defer();
    $http({
      url: 'http://localhost:3000/api/studentSkills',
      method: 'GET',
     
    }).then(function(response) {
      //console.log("cohort collection", response.data)
      deferred.resolve(response.data);
    })
    return deferred.promise;
  }
      this.UpdateStudentSkills = function (studentSkills) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:3000/api/studentSkills',
      data: {
       
        text: studentSkills.text
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
    this.addStudentSkills = function (studentSkills) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://localhost:3000/api/studentSkills',
      data: {
        
        text: studentSkills.text
      }
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
    this.deleteStudentSkills = function (studentSkills) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://localhost:3000/api/studentSkills/' + studentSkills._id
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };




});