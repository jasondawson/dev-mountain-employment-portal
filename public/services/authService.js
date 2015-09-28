app.service("authService", function($q, $http) {

var loginUser = {};

this.checkRoles = function(user, checkRole) {
	hasRole = false;
	user.roles.forEach(function(role) {
		if (role.role === checkRole) hasRole = true;
	})
	return hasRole;
}

this.getLoginUser = function() {
	return loginUser;
}

this.getUser = function() {
	var deferred = $q.defer();
 	$http.get("/auth/getUser").then(function(response) {
 		if (response.data.user) {
 			loginUser = response.data.user;
 		} 
 		deferred.resolve(response.data);
 	})
	
	return deferred.promise;
}



});