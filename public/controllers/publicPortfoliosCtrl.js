app.controller("publicPortfoliosCtrl", function($scope, publicPortfoliosSvc,
	cohortroute, $stateParams, $state) {


	$scope.getCohorts = cohortroute;

	$scope.getByCohort = function() {
		publicPortfoliosSvc.getByCohort($stateParams.id).then(function(
			response) {
			$scope.studentPortfolio = response;
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

			var thisCohort = _.find(response, function(i) { return i.cohort.cohortname._id === $stateParams.id}).cohort

			$scope.cohort = thisCohort;
		})
	}
	$scope.portfolioPreview();



})
