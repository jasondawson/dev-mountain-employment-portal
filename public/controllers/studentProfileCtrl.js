app.controller("studentProfileCtrl", function($scope, studentProfileSvc, cohortNameServ, $filter, $http) {

	$scope.studentProfilesTest =
		"This test is from the studentProfileCtrl file from $scope";
  $scope.studentData = {};/// name the variables before hand bacuase scope will keep WATCH on this variables until the functions are done loading our data!!

  $scope.getStudentProf = function() {

    studentProfileSvc.getStudentProf().then(function(response) {
      $scope.studentData = response;
      console.log(response);
    })
  };


	$scope.getStudentProf();

  $scope.statuses =[
  	{value:1, text:'Student'},
  	{value:2, text:'Unemployed'},
  	{value:3, text:'Employed'},
  	{value:4, text:'Freelance'}
  ];

  $scope.cohortLocations =[
  	{value:1, text:'Dallas, Tx'},
  	{value:2, text:'SLC, UT'},
  	{value:3, text:'Provo, UT'},
  ];

  $scope.cohortNames =[];
/*  	{value:1, text:'DM1'},
  	{value:2, text:'DM2'},
  	{value:3, text:'DM3'},
  	{value:4, text:'DM4'}, 
    {value:5, text:'DM5'}, 
    {value:6, text:'DM6'}, */	
   /// create a fucntion to get thsi information form a service form teh database
  $scope.getcohortnames=function(){
    cohortNameServ.getCohortName().then(function(response){
      $scope.cohortNames=response;
    })
  };
  $scope.getcohortnames();

  $scope.addcohortName=function(cohortName){
    if(cohortName){
      cohortNameServ.addCohortName(cohortName).then(function(response){
        $scope.newCohort=response
      })
    }
  }

    $scope.classNames =[
  	{value:1, text:'Web Development'},
  	{value:2, text:'IOS'}, 	
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
/* Fake DATA
$scope.url='';
$scope.checkforUrl=function(studentData){
	if (studentData.studentPortf.github !== null) {
		return $scope.url = studentData.studentPortf.github;
	} else{
		$scope.url = "http://github.com"
	};
}
$scope.checkforUrl();*/
 //var studentpicture=$scope.s3url; see how to save puc url from amazon to our student profile 

	
/*  $scope.user = {
    name: 'Name',
    midle:"M",
    lastname:'Last-Name',
    email:'your@email.com',
    pictureurl:'Upload you picture here',
    github: '',
    personalWebsite: 'Personal Website',
    linkdIn: 'Share your LinkdIn',
    Bio: 'Here is where you tell us about you: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
 // link or upload to amazon s3 that saves link to resume.
   currentLoc: {
    city: 'City',
    state: 'State',
  	},
  	status: 0,
  	cohortLoc:0,

  }; */
