app.service("adminSvc", function($http, $q) {

var newPercentObject={};

// this.create = function() {
// 	var deferred = $q.defer();
// 	$http({
// 		method: "POST",
// 		url: "/api/studentPorftolio"
// 	}).then(function(response) {
// 		deferred.resolve(response);
// 	});
// 	return deferred.promise;
// }


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
		// console.log("New percent in the service", newPercentObject);
	var deferred = $q.defer();
	$http({
		method: "PUT",
		url: '/api/studentPortfolio/' + id,
		data: newPercentObject
	}).then(function(response) {
		// console.log('admin service', response);
		deferred.resolve(response);
	});
	return deferred.promise;
}

this.adminUpdateShowStudent = function(student) {
	var deferred = $q.defer();
	$http({
		method: "PUT",
		url: '/api/studentPortfolio/' + student._id,
		data: student
	}).then(function(response) {
		deferred.resolve(response);
	});
	return deferred.promise;
}

// this.delete = function() {
// 	var deferred = $q.defer();
// 	$http({
// 		method: "DELETE",
// 		url: '/api/project/:id'
// 	}).then(function(response) {
// 		deferred.resolve(response);
// 	});
// 	return deferred.promise;
// }


});
