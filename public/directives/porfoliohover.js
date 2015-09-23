app.directive('portfolioView', function() {
  return {
    restrict: 'E',
    scope: {
      student: "="
    },
    templateUrl: '/html-templates/hoverPortfolio.html',
    link: function(scope, elem, attrs) {
      //gets the first project and shows it
      var project = scope.student.projects;
      var firstProject = project[0];
      var fp_name = firstProject.name;
      var fp_type = firstProject.projectType;
      var fp_description = firstProject.description;
      //gets the second project and shows it
      var secondProject = project[1];
      var sp_name = secondProject.name;
      var sp_type = secondProject.projectType;
      var sp_description = secondProject.description;
      //the template that shows the second project
      var newHtml =
        '<div class="projects outer-box"><div class="firstproject"> Project Name: ' +
        fp_name + '<br>Type: ' + fp_type + '<br>Description: ' +
        fp_description +
        '</div><br><div class="secondproject"> Project Name: ' +
        sp_name + '<br>Type: ' + sp_type + '<br>Description: ' +
        sp_description +
        '</div> </div>';
      elem.on('mouseenter', function() {
        elem.html(
          newHtml
        )
      });
      elem.on('mouseleave', function() {
        elem.html();
      });
    }

    // link: function(scope, elems, attrs) {
    //   elem.on('mouseenter/exit', function() {
    //     elem.html('new info goes here');
    //   });
    // }
    //$location
  }
});
