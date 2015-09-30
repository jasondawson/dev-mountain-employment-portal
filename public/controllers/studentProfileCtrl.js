app.controller("studentProfileCtrl", function($scope, studentProfileSvc,
	cohortNameServ, cohortLocServ, loginSvc, classNameServ, studentSkillsService,
	$filter,
	$http, $stateParams, studentProfileEdit, cohortroute) {

	$scope.thisStudent = cohortroute;

	$scope.studentData = {
		name: {},
		skills: []
	}; /// name the variables before hand bacuase scope will keep WATCH on this variables until the functions are done loading our data!!
	$scope.getStudentProf = function() {
		studentProfileSvc.getStudentProf($stateParams.id).then(function(response) {
			$scope.studentData = response.studentPortf;
			console.log('this is studenDAta', $scope.studentData);

		})
	};
	$scope.getStudentProf();

	$scope.isMyProfile = function() {
		var loggedInUser = loginSvc.getLoggedInUser();
		return loggedInUser.Id === $scope.profileId;
	};

	$scope.classNames = [];
	$scope.getClassNames = function() {
		classNameServ.getClassName().then(function(response) {
			$scope.classNames = response.data;
			//console.log(response.data);
		})
	};
	$scope.getClassNames();

	$scope.cohortLocations = [];
	$scope.getcohortLocations = function() {
		cohortLocServ.getCohortLoc().then(function(response) {
			//$scope.response.push(cohortLocations);
			$scope.cohortLocations = response.data;
		})
	};
	$scope.getcohortLocations();

	$scope.cohortNames = [];
	$scope.getcohortnames = function() {
		cohortNameServ.getCohortNames().then(function(response) {
			//console.log(response);
			$scope.cohortNames = response.data;
		})
	};
	$scope.getcohortnames();


	$scope.statuses = [{
		text: 'Student'
	}, {
		text: 'Unemployed'
	}, {
		text: 'Employed'
	}, {
		text: 'Freelance'
	}];

	$scope.relocationOptns = [{
		text: 'YES'
	}, {
		text: "NO"
	}, {
		text: "Interested in working remotely"
	}];

	//updateStudent($data) function from html
	$scope.updateStudent = function(studentInfo) {
		//console.log("what $data i am getting?", studentInfo);
		studentProfileSvc.updateStudentInfo(studentInfo, $scope.studentData._id).then(
			function(response) {
				$scope.getStudentProf()
			})

	};

	//saving Student Image
	$scope.saveProfilePic = function(data) {
		//console.log('this is studentdata', data);
		studentProfileSvc.updateStudentInfo(data, $scope.studentData._id).then(
			function(response) {
				$scope.getStudentProf()
			})
	};
	$scope.saveProject = function(project) {
		studentProfileSvc.updateProject(project).then(
			function(response) {
				$scope.getStudentProf()
			})
	}

	$scope.saveProjectPic = function(data) {
		studentProfileSvc.updateProject(data).then(function(response) {
			$scope.getStudentProf()
		})
	};


	$scope.newProject = {
		projectType: null,
		name: null,
		picture: null,
		description: null,
		TechUsed: null,
		codeSource: {
			name: null,
			url: null
		}
	}


	$scope.saveNewProject = function(newProject) {
		studentProfileSvc.addProject($scope.newProject).then(
			function(response) {
				console.log(response.data._id);

				$scope.newProject = {};
				$scope.newProject.picture = "//:0";
				$scope.getStudentProf();
			})
	}

	/*
  saveNewProject function
  takes $scope.newProject
  sends it to the database
  $scope.newProject = {}
  HOW DO I SAVE IT TO STUDENT PROFILE?

get project id after.THEN and $push it (angularJS DOCS) to studentProfile.projectsArray

  */
	$scope.deleteProject = function(project) {
		studentProfileSvc.delProject(project).then(function(response) {
			$scope.getStudentProf();
		})
	}


});
