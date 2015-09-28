app.controller("authCtrl", function($scope, authService) {



$scope.login = function() {
		authService.getUser().then(function(data) {
			if (data.redirect) {
            $window.location.replace(data.location)
          	}
          	if (data.user) {
          		if (authService.checkRoles(data.user, "lead_instructor")) {
          			$state.go("admin");
				}
				if (authService.checkRoles(data.user, "student")) {
					$state.go("profiles");
				}
          	}
		})
	}
})