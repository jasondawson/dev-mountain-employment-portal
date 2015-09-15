app.controller("studentProfileCtrl", function($scope, studentProfileSvc) {

	$scope.studentProfilesTest =
		"This test is from the studentProfileCtrl file from $scope";

	$scope.getStudentProf = function() {
		studentProfileSvc.getStudentProf().then(function(response) {
			$scope.studentData = response;
			console.log(response);
		})
	};

	$scope.getStudentProf();


});
