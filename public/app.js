"use Strict";
var app = angular.module("portalsApp", ['ui.router', 'xeditable', 'smart-table',
  'ngMaterial', 'ngAnimate'
]);

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /homeView
  $urlRouterProvider.otherwise("/homeView");

  $stateProvider

    .state('admin', {
    url: "/admin",
    templateUrl: "html-templates/admin.html",
    controller: "adminCtrl"
  })

  .state("createAccount", {
    url: "/createAccount",
    templateUrl: "html-templates/createAccount.html",
    controller: "loginCreateAccountCtrl"
  })

  .state('homeView', {
    url: "/homeView",
    templateUrl: "html-templates/homeView.html",
    controller: "homeviewCtrl"
  })

  .state('login', {
      url: "/login",
      templateUrl: "html-templates/login.html",
      controller: "loginCreateAccountCtrl"
    })
    .state('logout', {
      url: "/homeView",
      templateUrl: "html-templates/homeView.html",
      controller: "homeViewCtrl"
    })


  .state("profile", {
      url: "/profile",
      templateUrl: "html-templates/publicStudentProfile.html",
      controller: "studentProfileCtrl"
    })
    // .state("profile",{
    //   url:"/profile/:loginId",
    //   templateUrl: "html-templates/publicStudentProfile.html",
    //   controller: "studentProfileCtrl"
    // })


  .state("profiles", {
    url: "/profiles",
    templateUrl: "html-templates/publicStudentProfile.html",
    controller: "studentProfileCtrl"
  })

  .state("portfolioview", {
    url: "/portfolioview",
    templateUrl: "html-templates/portfolioList.html",
    controller: "portfolioListCtrl"
  })


  .state("portfolios", {
    url: "/portfolios/:id",
    templateUrl: "html-templates/publicPortfolios.html",
    controller: "publicPortfoliosCtrl",
    resolve: {
      cohortroute: function($stateParams, publicPortfoliosSvc) {
        return publicPortfoliosSvc.getByCohort($stateParams.id)
      }
    }
  })

});
app.directive("progressbar", function() {
  return {
    restrict: "A",
    scope: {
      total: "=",
      current: "="
    },
    link: function(scope, element) {

      scope.$watch("current", function(value) {
        element.css("width", scope.current / scope.total * 100 + "%");
      });
      scope.$watch("total", function(value) {
        element.css("width", scope.current / scope.total * 100 + "%");
      })
    }
  };
});

app.run(function(editableOptions, $state, $rootScope) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  /*$rootScope.$on('$stateChangeStart',
function(event, toState, toParams, fromState, fromParams){
    event.preventDefault(); */
  // transitionTo() promise will be rejected with
  // a 'transition prevented' error
  //});
});
