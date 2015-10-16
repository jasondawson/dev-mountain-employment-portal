app.controller('portfolioListCtrl', ['$scope',
  'publicPortfoliosSvc', '$state',
  function($scope,
    publicPortfoliosSvc, $state) {

    $scope.goToCohort = function(cohort) {
      $state.go('portfolios', {
        id: cohort
      })
    };

    $scope.portfolioPreview = function() {
      publicPortfoliosSvc.getStudentProf().then(function(response) {
        var onlyShow = _.filter(response, function(i) {return i.showProfile});
        var _map = {};
        var byCohort = [];
        _.each(onlyShow, function(element, index, list) {
          var cohortObj = _map[element.cohort.cohortname._id];
          if (!cohortObj) {
            cohortObj = _map[element.cohort.cohortname._id] = {
              "cohort": element.cohort.cohortname.text,
              "classLocation": element.classLocation,
              "classType": element.classType,
              "classId": element.cohort.cohortname._id,
              profiles: []
            };
            byCohort.push(cohortObj)
          };
          cohortObj.profiles.push({
            "firstname": element.name.first,
            "lastname": element.name.last,
            "studentpic": element.picture
          })
        })

        $scope.cohort = byCohort;
      })
    }
    $scope.portfolioPreview();

    //end of controller
  }
])
