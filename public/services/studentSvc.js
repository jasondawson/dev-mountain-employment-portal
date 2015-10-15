app.service('studentSvc', function($http, $q) {

  this.getStudent = function(id) {
    var deferred = $q.defer();
    $http({
      url: '/api/student/' + id,
      method: 'GET',
    }).then(function(response) {

      deferred.resolve(response.data);
    })
    return deferred.promise;
  }

})
