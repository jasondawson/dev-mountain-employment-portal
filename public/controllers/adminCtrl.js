app.controller("adminCtrl", function($scope, adminSvc, cohortLocServ, classNameServ, cohortNameServ, $timeout, $mdUtil, $mdSidenav, $log) {

$scope.students = [];
  //////SLIDER NAV BAR FUNCTION////////

  $scope.toggleLeft = buildToggler('left');

  function buildToggler(navID) {
    var debounceFn = $mdUtil.debounce(function() {
      $mdSidenav(navID)
        .toggle()
        .then(function() {
          $log.debug("toggle " + navID + " is done");
        });
    }, 200);
    return debounceFn;
  }
  $scope.close = function() {
    $mdSidenav('left').close()
      .then(function() {
        $log.debug("close LEFT is done");
      });
  };

  /////CRUD FUNCTIONS//////


  $scope.adminReadStudents = function() {
    adminSvc.adminReadStudents().then(function(response) {
      $scope.students = response.data;
    });
  };
  $scope.adminReadStudents();


  $scope.showProfile = function(student) { ////this function changes boolean in database for the checkboxes
    adminSvc.adminUpdateShowStudent(student).then(function(response) {
      if (response.status === 200) {
        $scope.adminReadStudents();
      }
    });
  };

  $scope.adminUpdatePercent = function(percent, index, _id) {
    $scope.students[index].percentCompleted = percent;
    if (percent < 0 || percent > 100) {
      alert(
        "Enter a number between 0 and 100. Your incorrect input did not save to the database"
      );
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

  /////GET AND POST FOR SIDE NAV//////

  var getCohortLocations = function() {
    cohortLocServ.getCohortLoc().then(function(response) {
      if (response.status === 200) {
        $scope.cohortLocations = response.data;
      }
    })
  }
  getCohortLocations();

  $scope.addNewLocation = function(newLoc) {
    cohortLocServ.addCohortLoc(newLoc).then(function(response) {
      getCohortLocations();
      $scope.newLoc = "";
    })
  }

  var getCourseNames = function() {
    classNameServ.getClassName().then(function(response) {
      if (response.status === 200) {
        $scope.courseNames = response.data;
      }
    })
  }
  getCourseNames();

  $scope.addNewCourseName = function(newCourse) {
    classNameServ.addClassName(newCourse).then(function(response) {
      getCourseNames();
      $scope.newCourse = "";
    })
  }

  var getCohortNames = function() {
    cohortNameServ.getCohortNames().then(function(response) {
      $scope.cohortNames = response.data;
    })
  }
  getCohortNames();

  $scope.addNewCohortName = function(newCohort) {
    cohortNameServ.addCohortName(newCohort).then(function(response) {
      getCohortNames();
      $scope.newCohort = "";
    })
  }

$scope.deleteCohortLocation= function(cohortLocation){
    cohortLocServ.deleteCohortLoc(cohortLocation).then(function(response) {
      getCohortLocations();
    })
}
$scope.deleteCohortName= function(cohortName){
    cohortNameServ.deleteCohortName(cohortName).then(function(response) {
      getCohortNames();
    })
}
$scope.deleteClassName= function(className){
    classNameServ.deleteClassName(className).then(function(response) {
      getCourseNames();
    })
}


});
