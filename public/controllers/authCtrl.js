app.controller("authCtrl", function($scope, authService, $state, $window) {



$scope.login = function(type) {
		authService.getUser(type).then(function(data) {
			if (data.redirect) {
            $window.location.replace(data.location)
          	}
          	if (data.user) {
          		if (authService.checkRoles(data.user, "lead_instructor")) {
          			$state.go("admin");
				}
				if (authService.checkRoles(data.user, "student")) {
          authService.getLoginUser().then(function(loggedInUser) {
            console.log(loggedInUser);
            if (loggedInUser) {
              $state.go("profiles", {id: loggedInUser._id});
            }
          });
				}
          	}
		})
	}

  $scope.logout = function() {
    authService.logout().then(function() {
      $state.go('homeView')
    });
    }

})
