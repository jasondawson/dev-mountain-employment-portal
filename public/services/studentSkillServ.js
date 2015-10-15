app.service("studentSkillsService", function($http, $q) {

  this.getStudentSkills=function(){
    var deferred=$q.defer();
    $http({
      url: '/api/studentSkills',
      method: 'GET'
    }).then(function(response) {
      deferred.resolve(response.data);
    })
    return deferred.promise;
  }
      this.UpdateStudentSkills = function (studentSkills) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: '/api/studentSkills',
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
      url: '/api/studentSkills',
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
      url: '/api/studentSkills/' + studentSkills._id
    }).then(function (response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };




});
