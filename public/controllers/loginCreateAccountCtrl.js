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
        // $location.path("/register");
      }
    })
  }

});
