app.controller("publicPortfoliosCtrl", function($scope, publicPortfoliosSvc) {

	$scope.portfoliosTest =
		"This test is from the publicPortfoliosCtrl file from $scope";


	$scope.getStudentProf = function() {
		publicPortfoliosSvc.getStudentProf().then(function(response) {
			$scope.studentPorftolio = response;
			console.log(response);
		})
	};

	$scope.getStudentProf();

	$scope.getStudentProj = function(data) {
		publicPortfoliosSvc.getStudentProj(data).then(function(response) {
			$scope.StudentProject = response;
		})
	};

	$scope.getStudentProj();

	$scope.reset = function() {
		$scope.StudentProject = "";
	}

	$scope.getStudentProj();



})
