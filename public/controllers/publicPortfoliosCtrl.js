app.controller("publicPortfoliosCtrl", function($scope, publicPortfoliosSvc,
	cohortroute, $stateParams, $state) {


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

	$scope.portfolioPreview = function() {
		publicPortfoliosSvc.getStudentProf().then(function(response) {
			console.log('this is response', response);
			var _map = {};
			var byCohort = [];
			_.each(response, function(element, index, list) {
				var cohortObj = _map[element.cohort.cohortname._id];
				if (!cohortObj) {
					cohortObj = _map[element.cohort.cohortname._id] = {
						"cohort": element.cohort.cohortname.text,
						"classLocation": element.classLocation,
						"classType": element.classType,
					};
					byCohort.push(cohortObj)
				};
			})

			$scope.cohort = byCohort;
		})
	}
	$scope.portfolioPreview();



})
