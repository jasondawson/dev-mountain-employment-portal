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

  .state('homeView', {
    url: "/homeView",
    templateUrl: "html-templates/homeView.html",
    controller: "homeviewCtrl"
  })

    .state('logout', {
      url: "/homeView",
      templateUrl: "html-templates/homeView.html",
      controller: "homeViewCtrl"
    })


  .state("profile", {
    url: "/profile/:id",
    templateUrl: "html-templates/StudentProfileEdit.html",
    controller: "studentProfileCtrl",
    resolve: {
      cohortroute: function($stateParams, studentProfileSvc) {
        return studentProfileSvc.getStudentProf($stateParams.id)
      },
      profileUser: function(authService) {
        return authService.getLoginUser();
      }
    }
  })

  .state("student", {
    url: "/student/:id",
    templateUrl: "html-templates/studentPublic.html",
    controller: "studentCtrl",
    resolve: {
      student: function($stateParams, studentSvc) {
        return studentSvc.getStudent($stateParams.id)
      },
      loggedInUser: function(authService) {
        return authService.getLoginUser();
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

app.run(function($rootScope, authService, $state) {

  $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams, fromState, fromStateParams) {
    authService.checkUser().then(function(user) {
    if (toState.name === 'profile') {
      if (toStateParams.id && (toStateParams.id !== user._id)) {
        console.log('not this user. Cannot edit this profile, view instead')
        $state.go('student', {id: toStateParams.id})
      }
    }
    if (toState.name === 'admin') {
      if (!user.lead_instructor) {
        console.log('not an admin...')
        $state.go('homeView');
      }
    }
    })

  })
})
