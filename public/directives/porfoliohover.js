app.directive('portfolioView', function() {
  return {
    restrict: 'E',
    scope: {
      student: "="
    },
    template: '<div class="outer-box">Name: {{student.name.first}} {{student.name.last}}<br>Bio: {{student.Bio}} <br>Skills: {{student.skills}}</div>'
      // link: function(scope, elems, attrs) {
      //   console.log(scope.datasource);
      // }
  }
});
