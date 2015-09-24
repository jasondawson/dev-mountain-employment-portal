app.controller("studentProfileCtrl", function($scope, studentProfileSvc,cohortNameServ, cohortLocServ, classNameServ, studentSkillsService, $filter, $http) {

	$scope.studentProfilesTest =
		"This test is from the studentProfileCtrl file from $scope";
  $scope.studentData = {};/// name the variables before hand bacuase scope will keep WATCH on this variables until the functions are done loading our data!!
  $scope.studentClassName={};
  $scope.studentCohortLocation={};
  $scope.studentCohortName={};
  $scope.studentSkills={};
  $scope.getStudentProf = function() {
    studentProfileSvc.getStudentProf().then(function(response) {
      $scope.studentData = response;
      $scope.studentClassName = response.studentPortf.cohort.className[0]._id;
      $scope.studentCohortLocation = response.studentPortf.cohort.cohortLocation[0]._id;
      $scope.studentCohortName = response.studentPortf.cohort.cohortName[0]._id;
       $scope.studentSkills=response.studentPortf.skills;
      console.log($scope.studentData);
      console.log($scope.studentSkills);
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
    {text:'Student'},
    {text:'Unemployed'},
    {text:'Employed'},
    {text:'Freelance'}
  ];

  $scope.relocationOptns =[
    {text:'YES'},
    {text:"NO"},
    {text:"Interested in working remotely"} 
  ];
  
  $scope.skillsArray=[];
    $scope.getstudentSkills=function(){
    studentSkillsService.getStudentSkills().then(function(response){
      $scope.skillsArray=response;
      console.log(response);
    })
  };
  $scope.getstudentSkills();

  $scope.showSkills= function(){
    var selected =[];
/*    angular.forEach($scope.skillsArray, function(obj){
    
      if($scope.studentSkills[obj._id] === $scope.skillsArray[obj._id]){
        selected.push(obj.title);
        console.log($scope.studentSkills[obj._id])
      }
    });
    return selected.length ? selected.join(', ') : "Not Set";
  };*/
    angular.forEach($scope.studentSkills, function(obj){
    //console.log($scope.studentSkills[obj._id]);
      if($scope.studentSkills[obj._id] === $scope.skillsArray[obj._id]){
        selected.push(obj.title);
      }
    });
    return selected.length ? selected: "";
  };

  $scope.showSkills();
//updateStudent($data) function from html
  $scope.updateStudent= function(studentInfo){
    console.log("what $data i am getting?",studentInfo);
   studentProfileSvc.updateStudentInfo(studentInfo).then(function(response){
    $scope.getStudentProf()
   })

  };


    $scope.projectTypes =[
    {text:'Personal'},
    {text:'Group'}, 
  ];
  

});
