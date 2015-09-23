app.directive('portfolioView', function() {
  return {
    restrict: 'E',
    scope: {
      student: "="
    },
    templateUrl: '/html-templates/hoverPortfolio.html',
    link: function(scope, elem, attrs) {
      console.log('this is scope link', scope.student.projects);
      var test = scope.student;
      var projects = {};

      var newHtml =
        '<div class="outer-box" ng-repeat="project in test.projects"> Project: ' +
        test.name +
        '</div>';
      console.log('this is test', test);
      elem.on('click', function() {
        elem.html(
          newHtml
        )
      })
    }

    // link: function(scope, elems, attrs) {
    //   elem.on('mouseenter/exit', function() {
    //     elem.html('new info goes here');
    //   });
    // }
    //$location
  }
});
