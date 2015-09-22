app.controller("adminCtrl", function($scope, adminSvc, $timeout, $mdUtil, $mdSidenav, $log) {



// $scope.checkboxModel = {
//        value1 : false,
//      };
$scope.toggleLeft = buildToggler('left');
function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },200);
      return debounceFn;
    }
     $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
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