"use Strict";
var app = angular.module("portalsApp", ['ui.router', 'xeditable', 'smart-table',
  'ngMaterial', 'ngAnimate', 'truncate'
]);

app.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {

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
    url: "/profile/:id",
    templateUrl: "html-templates/publicStudentProfile.html",
    controller: "studentProfileCtrl",
    resolve: {
      cohortroute: function($stateParams, studentProfileSvc) {
        return studentProfileSvc.getStudentProf($stateParams.id)
      }
    }
  })

  .state("student", {
    url: "/student/:id",
    templateUrl: "html-templates/student.html",
    controller: "studentCtrl",
    resolve: {
      student: function($stateParams, studentSvc) {
        return studentSvc.getStudent($stateParams.id)
      }
    }
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

  $mdThemingProvider.theme('default')
    .primaryPalette('blue');

});
