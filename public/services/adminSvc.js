app.service("adminSvc", function($http, $q) {

this.create = function() {
	var deferred = $q.defer();
	$http({
		method: "POST",
		url: "/api/studentPorftolio"
	}).then(function(response) {
		deferred.resolve(response);
	});
	return deferred.promise;
}



this.read = function() {
	var deferred = $q.defer();
	$http({
		method: "GET",
		url: '/api/studentPorftolio'
	}).then(function(response) {
		deferred.resolve(response);
	})
	return deferred.promise;
};


this.update = function() {
	var deferred = $q.defer();
	$http({
		method: "PUT",
		url: '/api/project/:id'
	}).then(function(response) {
		deferred.resolve(response);
	});
	return deferred.promise;
}


this.delete = function() {
	var deferred = $q.defer();
	$http({
		method: "DELETE",
		url: '/api/project/:id'
	}).then(function(response) {
		deferred.resolve(response);
	});
	return deferred.promise;
}


});
