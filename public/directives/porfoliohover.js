app.directive('portfolioView', function() {
  return {
    restrict: 'E',
    scope: {
      student: "="
    },
    template: '<div class="outer-box"><img src="{{student.picture}}" alt="{{student.name.first}} {{student.name.last}}" style="width: 200px; height: 200px">Name: {{student.name.first}} {{student.name.last}}<br>Bio: {{student.Bio}} <br>Skills: {{student.skills}}<br></div>',
    link: function(scope, elem, attrs) {
      console.log('this is scope link', scope);
      var test = scope.student;
      var newHtml = '<div class="outer-box"> Personal Website: ' + test.personalWebsite +
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
