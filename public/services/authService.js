app.service("authService", function($q, $http, $rootScope) {

var loginUser = {};

this.checkRoles = function(user, checkRole) {
	hasRole = false;
	user.roles.forEach(function(role) {
		if (role.role === checkRole) hasRole = true;
	})
	return hasRole;
}

this.getLoginUser = function() {
	var dfd = $q.defer();
	$http.get('/auth/getSessionUser').then(function(response) {
		loginUser = response.data;
		dfd.resolve(loginUser);
	})
	return dfd.promise;
  // TODO if there is a user, send some sort of refresh flag
}

this.getUser = function(type) {
	var deferred = $q.defer();
 	$http.get("/auth/getUser/" + type).then(function(response) {
 		if (response.data.user) {
 			$rootScope.loggedIn = true;
 			loginUser = response.data.user;
      console.log(loginUser)
 		}
 		deferred.resolve(response.data);
 	})

	return deferred.promise;
}

this.logout = function() {
		var dfd = $q.defer();
	$http.get('/auth/logout').then(function() {
		$rootScope.loggedIn = false;
		loginUser = {};
		dfd.resolve();

	})
		return dfd.promise;
}

});
