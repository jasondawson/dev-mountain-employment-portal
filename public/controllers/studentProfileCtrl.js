app.controller("studentProfileCtrl", function($scope, studentProfileSvc,cohortNameServ, cohortLocServ, classNameServ, $filter, $http) {

	$scope.studentProfilesTest =
		"This test is from the studentProfileCtrl file from $scope";
  $scope.studentData = {};/// name the variables before hand bacuase scope will keep WATCH on this variables until the functions are done loading our data!!
  $scope.studentClassName={};
  $scope.studentCohortLocation={};
  $scope.studentCohortName={};
  $scope.getStudentProf = function() {
    studentProfileSvc.getStudentProf().then(function(response) {
      $scope.studentData = response;
      $scope.studentClassName = response.studentPortf.cohort.className[0].value;
      $scope.studentCohortLocation = response.studentPortf.cohort.cohortLocation[0].value;
      $scope.studentCohortName = response.studentPortf.cohort.cohortName[0].value;
      console.log($scope.studentData);
    })
  };
	$scope.getStudentProf();

    $scope.classNames =[];
  $scope.getClassNames=function(){
    classNameServ.getClassName().then(function(response){
      $scope.classNames=response;
    })
  };
  $scope.getClassNames();

    $scope.addClassName=function(cohortName){
    if(cohortName){
      classNameServ.addClassName(cohortName).then(function(response){
        $scope.newClassName=response
      })
    }
  }

  $scope.cohortLocations =[];
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

  $scope.statuses =[
    {value:1, text:'Student'},
    {value:2, text:'Unemployed'},
    {value:3, text:'Employed'},
    {value:4, text:'Freelance'}
  ];

  $scope.relocation =[
    {value:1, text:'YES'},
    {value:2, text:'NO'},
    {value:3, text:"Interested in working remotely"} 
  ];
  
  $scope.updateStudent= function(student){

  }


    $scope.projectTypes =[
    {value:1, text:'Personal'},
    {value:2, text:'Group'}, 
  ];
  

});
