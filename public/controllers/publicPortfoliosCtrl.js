app.controller("publicPortfoliosCtrl", function($scope, publicPortfoliosSvc, $state) {

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

	$scope.viewFullProfile = function(studentPortfolio) {
		console.debug(studentPortfolio);
		$state.go('profiles', {id: studentPortfolio.loginInfo});
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
