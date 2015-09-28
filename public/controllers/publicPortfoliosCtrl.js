app.controller("publicPortfoliosCtrl", function($scope, publicPortfoliosSvc) {

	$scope.portfoliosTest =
		"This test is from the publicPortfoliosCtrl file from $scope";

	//TODO: Take cohortID in state param -> Only get studetns for that cohort id
	//$stateParams.cohortId  (route has portfolios/:cohortId)
	//Move filter to other page
	//Add click to open
	/*
	     add viewStudent function to scope, recieves student as paramter
	     $location to route using student id (route: profile/:studentId)
	*/

	$scope.getStudentProf = function() {
		publicPortfoliosSvc.getStudentProf().then(function(response) {
			$scope.studentPortfolio = response;
			console.log('this is $scope.studentPortfolio', $scope.studentPortfolio);
		})
	};

	$scope.getStudentProf();

	$scope.getStudentProj = function(data) {
		publicPortfoliosSvc.getStudentProj(data).then(function(response) {
			$scope.StudentProject = response;
		})
	};

})
