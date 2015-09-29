app.controller("publicPortfoliosCtrl", function($scope, publicPortfoliosSvc,
	cohortroute, $stateParams) {


	$scope.getCohorts = cohortroute;


	//TODO: Take cohortID in state param -> Only get studetns for that cohort id
	//$stateParams.cohortId  (route has portfolios/:cohortId)
	//Move filter to other page
	//Add click to open
	/*
	     add viewStudent function to scope, recieves student as paramter
	     $location to route using student id (route: profile/:studentId)
	*/

	$scope.getByCohort = function() {
		publicPortfoliosSvc.getByCohort($stateParams.id).then(function(
			response) {
			$scope.studentPortfolio = response;
			console.log('this is getbycohort response', response);
		})
	};

	$scope.getByCohort();

	$scope.getStudentProj = function(data) {
		publicPortfoliosSvc.getStudentProj(data).then(function(response) {
			$scope.StudentProject = response;
		})
	};

})
