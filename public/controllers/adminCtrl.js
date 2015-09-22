app.controller("adminCtrl", function($scope, adminSvc) {

// app.controller('adminCtrl', ['$scope', function (scope, adminSvc) {
    

    // $scope.rowCollection = [
    //     {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
    //     {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
    //     {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    // ];
// });


// $scope.create = function(var) {
// 	adminSvc.create(var).then(function(response) {

// 	});
// };

$scope.checkboxModel = {
       value1 : false,
     };


$scope.adminReadStudents = function() {
	adminSvc.adminReadStudents().then(function(response) {
		console.log("response from controller", response.data);
		$scope.students = response.data;
	});
};
$scope.adminReadStudents();


$scope.showProfile = function(student) {
	console.log(student)
	adminSvc.adminUpdateShowStudent(student).then(function(response) {
		if (response.status === 200) {
			$scope.adminReadStudents();
		}
	});
};

$scope.adminUpdatePercent = function(percent, index, _id) {
	$scope.students[index].percentCompleted = percent;
	if (percent < 0 || percent > 100) {
		alert("Enter a number between 0 and 100. Your incorrect input did not save to the database");
		$scope.adminReadStudents();
	}
	if (percent >= 0 && percent <= 100) {
		adminSvc.adminUpdatePercent(percent, _id).then(function(response) {
			if (response.status === 200) {
				$scope.adminReadStudents();
			}
		});
	}
};

// $scope.delete = function(var, _id) {
// 	adminSvc.delete(var, _id).then(function(response) {

// 	});
// };




});