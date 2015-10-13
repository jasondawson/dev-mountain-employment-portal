/*
controller('portfolioList') -> {
  var objectOfPortfolios = _.groupby(porfolios, 'cohortname')
format:
    {dm7: [{portfolio}, {portfolio}, x30], dm6: [portfolios]}


  [BONUS]
    for loop over objectOfPortfolios
        foreach groupKey ->
               var one = _.filter(objectOfPortfolios[groupKey], function(port) { port.complete === 100});
               var two = _.shuffle(one)
               var final = _.first(two, 3)
               objectOfPortfolios[groupKey] = final;
}
*/
app.controller('portfolioListCtrl', ['$scope',
  'publicPortfoliosSvc', '$state',
  function($scope,
    publicPortfoliosSvc, $state) {

    $scope.goToCohort = function(cohort) {
      $state.go('portfolios', {
        id: cohort
      })
    };

    // $scope.porfolioObj = function() {
    //   publicPortfoliosSvc.getStudentProf().then(function(response) {
    //     var objectOfPortfolios = _.groupBy(response, function(
    //       response) {
    //       return response.cohort.cohortname.text;
    //     });
    //     $scope.cohortProfile = objectOfPortfolios;
    //
    //   })
    // };
    //
    // $scope.porfolioObj();

    // for loop over objectOfPortfolios
    //     foreach groupKey ->
    //            var one = _.filter(objectOfPortfolios[groupKey], function(port) { port.complete === 100});
    //            var two = _.shuffle(one)
    //            var final = _.first(two, 3)
    //            objectOfPortfolios[groupKey] = final;

    // $scope.cohorts = []
    // cohort = {
    //     name:
    //     location:
    //     cateogry:
    //     profiles: [] (size of 3)
    //     cohortId:
    // }

    $scope.portfolioPreview = function() {
      publicPortfoliosSvc.getStudentProf().then(function(response) {
        var onlyShow = _.filter(response, function(i) {return i.showProfile});
        console.log('this is response', onlyShow);

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
