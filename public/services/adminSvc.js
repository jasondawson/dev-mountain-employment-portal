app.service("adminSvc", function($http, $q) {

var newPercentObject={};


this.adminReadStudents = function() {
	var deferred = $q.defer();
	$http({
		method: "GET",
		url: '/api/studentPortfolio'
	}).then(function(response) {
		deferred.resolve(response);
	})
	return deferred.promise;
};


this.adminUpdatePercent = function(newPercent, id) {
	newPercentObject.percentCompleted = newPercent;
	var deferred = $q.defer();
	$http({
		method: "PUT",
		url: '/api/studentPortfolio/' + id,
		data: newPercentObject
	}).then(function(response) {
		deferred.resolve(response);
	});
	return deferred.promise;
}

this.adminUpdateShowStudent = function(student) {
	console.log("showStudent function in Service to be sent to backend", student);
	var deferred = $q.defer();
	$http({
		method: "PUT",
		url: '/api/studentPortfolio/' + student._id,
		data: {
			showProfile: student.showProfile
		}
	}).then(function(response) {
		deferred.resolve(response);
	});
	return deferred.promise;
}



});
