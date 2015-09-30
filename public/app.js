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
<<<<<<< HEAD
    url: "/profile/:profileId",
   templateUrl: "html-templates/publicStudentProfile.html",
=======
    url: "/profile/:profileid",
    templateUrl: "html-templates/publicStudentProfile.html",
>>>>>>> login
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



// app.run(function($rootScope, $state, $window, authService, $location) {
//
//   var publicViews = ["homeView", "profiles", "portfolios", "portfolioview"];
//   authService.getLoginUser().then(function(loggedInUser) {
//     if (loggedInUser) {
//       $rootScope.loggedIn = true;
//     } else {
//       $rootScope.loggedIn = false;
//     }
//   });
//
// $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
//
//   if (publicViews.indexOf(toState.name) !== -1) return;
//
//   authService.getLoginUser().then(function(loggedInUser) {
//       console.log(loggedInUser);
//         if (loggedInUser.id) {
//           $rootScope.loggedIn = true;
//           return;
//         } else {
//           $rootScope.loggedIn = false;
//           authService.getUser().then(function(data) {
//             if (data.redirect) {
//               $window.location.replace(data.location)
//             } else {
//              return;
//             }
//
//           })
//         }
//   })
//     })
// })

/*Listen for state changes,
check for a user object that will be stored somewhere,
if (user) { then continue },
if (!user) { check for a user on the server },
if the server sends us a user, then we will store that user.
if the server does not send us a user, then we will redirect to Dev Mountain,


*/
