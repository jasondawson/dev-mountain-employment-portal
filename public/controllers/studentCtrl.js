app.controller('studentCtrl', function(
  $scope, studentSvc, $stateParams, student, loggedInUser, $state) {

  if (loggedInUser._id) {
    $scope.canEdit = $stateParams.id === loggedInUser._id;

    $scope.navToEditProfile = function() {
      console.log('click');
      $state.go('profile', {id: loggedInUser._id})
    }
  }


  $scope.theStudent = student;

  $scope.getStudent = function() {
    studentSvc.getStudent($stateParams.id).then(function(response) {
      $scope.thisStudent = response;
    })
  }

  $scope.getStudent();

})
