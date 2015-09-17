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


$scope.read = function() {
	adminSvc.read().then(function(response) {
		console.log("response from controller", response.data);
		$scope.students = response.data;
	});
};
$scope.read();

// $scope.update = function(var, _id) {
// 	adminSvc.update(var, _id).then(function(response) {

// 	});
// };

// $scope.delete = function(var, _id) {
// 	adminSvc.delete(var, _id).then(function(response) {

// 	});
// };




});