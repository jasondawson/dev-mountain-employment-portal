app.service("adminSvc", function($http, $q) {

var newPercentObject={};


this.adminReadStudents = function() {
	var deferred = $q.defer();
	$http({
		method: "GET",
		url: 'http://localhost:3000/api/studentPortfolio'
	}).then(function(response) {
		console.log(response.data)
		deferred.resolve(response);
	})
	return deferred.promise;
};


this.adminUpdatePercent = function(newPercent, id) {
	// console.log("andminUpdatePercent function in adminSvc is firing")
	newPercentObject.percentCompleted = newPercent;
		// console.log("New percent in the service", newPercentObject);
	var deferred = $q.defer();
	$http({
		method: "PUT",
		url: 'http://localhost:3000/api/studentPortfolio/' + id,
		data: newPercentObject
	}).then(function(response) {
		// console.log('admin service', response);
		deferred.resolve(response);
	});
	return deferred.promise;
}

this.adminUpdateShowStudent = function(student) {
	console.log("showStudent function in Service to be sent to backend", student);
	var deferred = $q.defer();
	$http({
		method: "PUT",
		url: 'http://localhost:3000/api/studentPortfolio/' + student._id,
		data: {
			showProfile: student.showProfile
		}
	}).then(function(response) {
		deferred.resolve(response);
	});
	return deferred.promise;
}



});
