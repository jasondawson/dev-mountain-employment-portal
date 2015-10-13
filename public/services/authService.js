app.service("authService", function($q, $http, $rootScope) {

	var loginUser = {};

	this.getLoginUser = function() {
		return loginUser;
	}

	this.checkUser = function() {
		var deferred = $q.defer();


		$http.get('/auth/currentUser').then(function(data) {
			loginUser = data.data.user ? data.data.user : {};
			if (data.data.student) {
				loginUser.student = true;
				$rootScope.isAdmin = false;
				$rootScope.studentLoggedIn = true;
				$rootScope.currentUserId = data.data.user._id;
			}
			if (data.data.lead_instructor) {
				loginUser.lead_instructor = true;
				$rootScope.isAdmin = true;
				$rootScope.studentLoggedIn = false;
			}
			// console.log(loginUser)
			if (loginUser._id) {
				$rootScope.loggedIn = true;
				deferred.resolve(loginUser)
			} else {
				//no user - loginUser = {}
				$rootScope.loggedIn = false;
				$rootScope.isAdmin = false;
				$rootScope.studentLoggedIn = false;
				deferred.resolve(loginUser);
			}

		})
		return deferred.promise;
	}

});
