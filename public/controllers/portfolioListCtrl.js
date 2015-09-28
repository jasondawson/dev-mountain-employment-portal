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
app.controller('portfolioListCtrl', function($scope, publicPortfoliosSvc) {
  $scope.porfolioObj = function() {
    publicPortfoliosSvc.getStudentProf().then(function(response) {
      console.log('this is response', response);
      var objectOfPortfolios = _.groupBy(response, function(response) {
        return response.cohort.cohortname.text;
      })

      console.log('this is objectOfPortfolios', objectOfPortfolios);


    })
  };

  $scope.porfolioObj();
})
