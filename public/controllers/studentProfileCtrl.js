app.controller("studentProfileCtrl", function($scope, studentProfileSvc,
	cohortNameServ, cohortLocServ, loginSvc, classNameServ, studentSkillsService,
	$filter, $http, $stateParams, cohortroute, profileUser, $state, authService) {

	$scope.thisStudent = cohortroute;

	$scope.navToViewProfile = function() {
		authService.checkUser().then(function(user) {
			console.log(user);
			$state.go('student', {id: user._id})

		})
	}

	$scope.studentData = {
		name: {},

	}; /// name the variables before hand bacuase scope will keep WATCH on this variables until the functions are done loading our data!!
	$scope.getStudentProf = function() {
		studentProfileSvc.getStudentProf($stateParams.id).then(function(response) {
			$scope.studentData = response.studentPortf;
			var loginID = $scope.studentData.loginInfo._id;
			console.log('this is studenDAta', $scope.studentData);

		})
	};
	$scope.getStudentProf();


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
			console.log(response);
			$scope.cohortNames = response.data;
		})
	};
	$scope.getcohortnames();


	$scope.statuses = [{
		id: 1,
		text: 'Student'
	}, {
		id: 2,
		text: 'Unemployed'
	}, {
		id: 3,
		text: 'Employed'
	}, {
		id: 4,
		text: 'Freelance'
	}];

	$scope.relocationOptns = [{
		id: 1,
		text: 'Yes'
	}, {
		id: 2,
		text: "No"
	}, {
		id: 3,
		text: "Interested in working remotely"
	}];

	//updateStudent($data) function from html
	$scope.updateStudent = function(studentInfo) {
		if ($scope.studentData.picture) {
			studentInfo.picture = $scope.studentData.picture;
		}
		console.log("what $data i am getting?", studentInfo);
		if (!studentInfo['cohort.className'] || !studentInfo['cohort.cohortLocation'] || !studentInfo['cohort.cohortname']) {
			var errorMessage = 'Class, Cohort, and Cohort Location are all required';
			alert(errorMessage)
			return errorMessage;
		}
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
		techUsed: null,
		codeSource: {
			name: null,
			url: null
		}
	}


	$scope.saveNewProject = function(newProject) {
		if (!(_.every(newProject) && _.every(newProject.codeSource))) {
			alert('All values and a picture are required');
			return false;
		}
		studentProfileSvc.addProject($scope.newProject, $scope.studentData._id).then(
			function(response) {
				console.log(response.data._id);

				$scope.newProject = {};
				$scope.newProject.picture = "//:0";
				$scope.getStudentProf();
			})
	}

	$scope.newDevskill={
		name:null,
		description:null,
		link:{
			name:null,
			url:null
		}
	}
	$scope.addNewDevSkill = function(newDevskill) {
		if (!(_.every(newDevskill) && _.every(newDevskill.link))) {
			alert('All values are required.');
			return false;
		}
		studentProfileSvc.addDevSkill($scope.newDevskill, $scope.studentData._id).then(
			function(response) {
				$scope.newDevskill = {};
				$scope.getStudentProf();
			})
	}

	$scope.saveDevSkill = function(devSkill) {
		console.log(devSkill);
		studentProfileSvc.updateDevSkill(devSkill).then(
			function(response) {
				$scope.getStudentProf()
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
	$scope.deleteDevSkill = function(devskill) {
		studentProfileSvc.deleteDevSkill(devskill).then(function(response) {
			$scope.getStudentProf();
		})
	}

	$scope.checkValues = function(property, data) {
		console.log(data)
		console.log(!!data[property])
		if (!!!data[property]) { return true; }
		return false
	}

});
