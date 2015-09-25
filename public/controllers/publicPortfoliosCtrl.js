app.controller("publicPortfoliosCtrl", function($scope, publicPortfoliosSvc) {

	$scope.portfoliosTest =
		"This test is from the publicPortfoliosCtrl file from $scope";


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


	$scope.reset = function() {
		$scope.StudentProject = "";
	}

	$scope.getStudentProj();

	$scope.web = "web";

	$scope.ios;

	var cohortType;
	$scope.setClass = function(classes) {
		if (classes === "web") {
			cohortType = "Web Development"
		} else {
			cohortType = "IOS"
		}
		className();
	}

})



app.filter('className', function() {
	return function(val) {
		console.log('this is val', val);
		var classes = [];
		angular.forEach(val, function(student) {
			if (student.cohort.className.text === "Web Development") {
				classes.push(student);
			}
		})
		return classes;
	}
})
