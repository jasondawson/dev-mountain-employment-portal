app.controller("studentProfileCtrl", function($scope, studentProfileSvc,cohortNameServ, cohortLocServ, $filter, $http) {

	$scope.studentProfilesTest =
		"This test is from the studentProfileCtrl file from $scope";
  $scope.studentData = {};/// name the variables before hand bacuase scope will keep WATCH on this variables until the functions are done loading our data!!

  $scope.getStudentProf = function() {

    studentProfileSvc.getStudentProf().then(function(response) {
      $scope.studentData = response;
    })
  };
	$scope.getStudentProf();

  $scope.cohortNames =[];
  $scope.getcohortnames=function(){
    cohortNameServ.getCohortName().then(function(response){
      $scope.cohortNames=response;
    })
  };
  $scope.getcohortnames();

  $scope.addcohortName=function(cohortName){
    if(cohortName){
      cohortNameServ.addCohortName(cohortName).then(function(response){
        $scope.newCohortName=response
      })
    }
  }

    $scope.studentCohortName={};
    $scope.getStudentCohortName = function() {

    studentProfileSvc.getStudentProf().then(function(response) {
      $scope.studentCohortName = response.studentPortf.cohort.cohortName[0].value;
//I need the Value so my view in public STudent profile can loop trhou thsi value and assign it to the student's cohort
    })
  };
  $scope.getStudentCohortName();



  $scope.cohortLocations =[
  ];
  $scope.getcohortLocations=function(){
    cohortLocServ.getCohortLoc().then(function(response){
      $scope.cohortLocations=response;
    })
  };
  $scope.getcohortLocations();

    $scope.addcohortLocation=function(cohortName){
    if(cohortName){
      cohortLocServ.addCohortLoc(cohortName).then(function(response){
        $scope.newCohortLoc=response
      })
    }
  }

    $scope.studentCohortLocation={};
    $scope.getStudentCohortLocation = function() {

    studentProfileSvc.getStudentProf().then(function(response) {
      $scope.studentCohortLocation = response.studentPortf.cohort.cohortLocation[0].value;

    })
  };
  $scope.getStudentCohortLocation();
  

  $scope.classNames =[
    {value:1, text:'Web Development'},
    {value:2, text:'IOS'},  
  ];

  $scope.statuses =[
    {value:1, text:'Student'},
    {value:2, text:'Unemployed'},
    {value:3, text:'Employed'},
    {value:4, text:'Freelance'}
  ];


  $scope.projectTypes =[
    {value:1, text:'Personal'},
    {value:2, text:'Group'}, 
  ];
  $scope.relocation =[
    {value:1, text:'YES'},
    {value:2, text:'NO'},
    {value:3, text:"Interested in working remotely"} 
  ];
  
  $scope.updateStudent= function(student){

  }

  

});
