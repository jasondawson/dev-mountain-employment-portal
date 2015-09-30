app.controller('studentCtrl', function(
  $scope, studentSvc, $stateParams, student) {

  $scope.theStudent = student;

  $scope.getStudent = function() {
    studentSvc.getStudent($stateParams.id).then(function(response) {
      $scope.thisStudent = response;
    })
  }

  $scope.getStudent();
})
