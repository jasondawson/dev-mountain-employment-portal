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

  // .state("createAccount", {
  //   url: "/createAccount",
  //   templateUrl: "html-templates/createAccount.html",
  //   controller: "loginCreateAccountCtrl"
  // })

  .state('homeView', {
    url: "/homeView",
    templateUrl: "html-templates/homeView.html",
    controller: "homeviewCtrl"
  })

  // .state('login', {
  //     url: "/login",
  //     templateUrl: "html-templates/login.html",
  //     controller: "loginCreateAccountCtrl"
  //   })
    // .state('logout', {
    //   url: "/homeView",
    //   templateUrl: "html-templates/homeView.html",
    //   controller: "homeViewCtrl"
    // })

  .state("portfolios", {
      url: "/portfolios",
      templateUrl: "html-templates/publicPortfolios.html",
      controller: "publicPortfoliosCtrl"
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


  // .state("portfolios", {
  //   url: "/portfolios/:cohort",
  //   templateUrl: "html-templates/publicPortfolios.html",
  //   controller: "publicPortfoliosCtrl",
  //   resolve: {
  //     portfolioroutes: function(publicPortfoliosSvc) {
  //       return publicPortfoliosSvc.getByCohort();
  //     }
  //   }
  // })

  .state("profiles", {
    url: "/profiles/:id",
    templateUrl: "html-templates/publicStudentProfile.html",
    controller: "studentProfileCtrl",
    resolve: {
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



app.run(function($rootScope, $state, $window, authService, $location) {

  var publicViews = ["homeView", "profiles", "portfolios", "portfolioview"];
  authService.getLoginUser().then(function(loggedInUser) {
    if (loggedInUser) {
      $rootScope.loggedIn = true;
    } else {
      $rootScope.loggedIn = false;
    }
  });

$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

  if (publicViews.indexOf(toState.name) !== -1) return;

  authService.getLoginUser().then(function(loggedInUser) {
      console.log(loggedInUser);
        if (loggedInUser.id) {
          $rootScope.loggedIn = true;
          return;
        } else {
          $rootScope.loggedIn = false;
          authService.getUser().then(function(data) {
            if (data.redirect) {
              $window.location.replace(data.location)
            } else {
             return;
            }

          })
        }
  })
    })
})

/*Listen for state changes,
check for a user object that will be stored somewhere,
if (user) { then continue },
if (!user) { check for a user on the server },
if the server sends us a user, then we will store that user.
if the server does not send us a user, then we will redirect to Dev Mountain,


*/
