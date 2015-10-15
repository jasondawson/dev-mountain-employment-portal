app.controller("authCtrl", function($scope, authService, $state, $window) {

  $scope.login = function(type) {
    authService.login()
  }

  $scope.logout = function() {
    authService.logout();
  }

})
