app.controller("homeViewController", function($scope) {


$scope.updates = ['Affordable', "Immersive", "highly-reviewed", "transformative", "innovative", "passionate", "accessible", "life-changing"];

//typed.js function

$(function(){
    $(".update-box").typed({
      strings:$scope.updates,
      typeSpeed: 40,
      loop: true,
      backDelay: 1500,
      contentType: 'text',
      loopCount: false,
      cursorChar: " |"
    });
  }());
});

