app.controller("loginCreateAccountCtrl", function($scope, loginSvc) {

  $scope.loginTest =
    "This test is from the Login/CreateAccount Controller file from $scope";
  $scope.createAccountTest =
    "This test is from the Login/CreateAccount Controller file from $scope";

  $scope.login = function(data) {
    console.log('this is login data', data);
    loginSvc.logInUser(data).then(function(response) {
      console.log('this is login response', response);
      if (response === "incorrect login") {
        $scope.error = "wrong login"
      } else {
        $scope.user = "";
        // $location.path("/register");
      }
    })
  }

  $scope.register = function(data) {
    console.log('this is register data', data);
    loginSvc.register(data).then(function(response) {
      console.log('this is register response', response);
      $scope.user = "";
    })
  }

});
