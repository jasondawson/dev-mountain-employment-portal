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
    console.log(toState.name);
    authService.checkUser().then(function(user) {
    console.log(user);
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
    // if(toState.name === 'admin') {
    //   authService.checkUser().then(function(user) {
    //     if (!user.lead_instructor) {
    //       $state.go('homeView');
    //     }
    //   })
    //   .catch(function(){
    //     // no user logged in
    //     $state.go('homeView');
    //   })
    // }
  })
})

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
