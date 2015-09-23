app.controller("adminCtrl", function($scope, adminSvc, cohortLocServ, $timeout,
  $mdUtil, $mdSidenav, $log) {


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
      console.log("response from controller", response.data);
      $scope.students = response.data;
      console.log($scope.students);
    });
  };
  $scope.adminReadStudents();


  $scope.showProfile = function(student) { ////this function changes boolean in database for the checkboxes
    console.log(student)
    adminSvc.adminUpdateShowStudent(student).then(function(response) {
      if (response.status === 200) {
        $scope.adminReadStudents();
      }
    });
  };

  $scope.adminUpdatePercent = function(percent, index, _id) { ////this function changes/updates the percent value
    $scope.students[index].percentCompleted = percent;
    if (percent < 0 || percent > 100) {
      alert(
        "Enter a number between 0 and 100. Your incorrect input did not save to the database"
      );
      $scope.adminReadStudents();
    }
    if (percent >= 0 && percent <= 100) {
      adminSvc.adminUpdatePercent(percent, _id).then(function(
        response) {
        if (response.status === 200) {
          $scope.adminReadStudents();
        }
      });
    }
  };

  var getCohortLocations = function() { ///tis function gets cohort locations from DB
    cohortLocServ.getCohortLoc().then(function(response) {
      if (response.status === 200) {
        $scope.cohortLocations = response.data;
        // console.log("cohort locations response on controller from the service", response.data);
      }
    })
  }
  getCohortLocations();

  $scope.addNewLocation = function(newLoc) {
    console.log("this is the newLoc before it goes to service",
      newLoc);
    cohortLocServ.addCohortLoc(newLoc).then(function(response) {
      console.log("new location response", response)
      if (response === 200) {
        $scope.newLoc = "";
        console.log("new location added");
      }
    })
    getCohortLocations();
  }

  // $scope.delete = function(var, _id) {
  // 	adminSvc.delete(var, _id).then(function(response) {

  // 	});
  // };



});
