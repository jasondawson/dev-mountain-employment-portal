app.controller("studentProfileCtrl", function($scope, studentProfileSvc,cohortNameServ, cohortLocServ, classNameServ, studentSkillsService, $filter, $http) {

	$scope.studentProfilesTest =
		"This test is from the studentProfileCtrl file from $scope";
  $scope.studentData = {};/// name the variables before hand bacuase scope will keep WATCH on this variables until the functions are done loading our data!!

  $scope.getStudentProf = function() {
    studentProfileSvc.getStudentProf().then(function(response) {
      $scope.studentData = response;
      console.log($scope.studentData);

    })
  };
	$scope.getStudentProf();

    $scope.classNames =[];
  $scope.getClassNames=function(){
    classNameServ.getClassName().then(function(response){
    $scope.classNames=response.data;
    console.log(response.data);
    })
  };
  $scope.getClassNames();

  $scope.cohortLocations =[];
  $scope.getcohortLocations=function(){
    cohortLocServ.getCohortLoc().then(function(response){
     //$scope.response.push(cohortLocations);
     $scope.cohortLocations=response.data;
    })
  };
  $scope.getcohortLocations();

  $scope.cohortNames =[];
  $scope.getcohortnames=function(){
    cohortNameServ.getCohortNames().then(function(response){
      console.log(response);
     $scope.cohortNames=response.data;
    })
  };
  $scope.getcohortnames();


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
