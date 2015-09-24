<<<<<<< HEAD
var app = angular.module("portalsApp", ['ui.router', 'xeditable', 'smart-table', 'ngMaterial', 'ngAnimate']);
=======
var app = angular.module("portalsApp", ['ui.router', 'xeditable', 'smart-table',
  'ngMaterial', 'ngAnimate'
]);
>>>>>>> bac10b5fecf24eb8532cc47c672e916ecd0dc23e


app.config(function($stateProvider, $urlRouterProvider) {

<<<<<<< HEAD
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
        templateUrl: "html-templates/homeView.html"
    })

    .state('login', {
            url: "/login",
            templateUrl: "html-templates/login.html",
            controller: "loginCreateAccountCtrl"
        })
        .state('logout', {
            url: "/homeView",
            templateUrl: "html-templates/homeView.html"
        })

    .state("portfolios", {
        url: "/portfolios",
        templateUrl: "html-templates/publicPortfolios.html",
        controller: "publicPortfoliosCtrl"
    })

    .state("profiles", {
        url: "/profiles",
        templateUrl: "html-templates/publicStudentProfile.html",
        controller: "studentProfileCtrl"
    })

    // .state("adminAddSchool", {
    //   url: "/adminAddSchool",
    //   templateUrl: "html-templates/adminAddSchool.html"
    // })
=======
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

  .state("portfolios", {
    url: "/portfolios",
    templateUrl: "html-templates/publicPortfolios.html",
    controller: "publicPortfoliosCtrl"
  })

  .state("profiles", {
    url: "/profiles",
    templateUrl: "html-templates/publicStudentProfile.html",
    controller: "studentProfileCtrl"
  })

  // .state("adminAddSchool", {
  //   url: "/adminAddSchool",
  //   templateUrl: "html-templates/adminAddSchool.html"
  // })
>>>>>>> bac10b5fecf24eb8532cc47c672e916ecd0dc23e

});

app.run(function(editableOptions) {
<<<<<<< HEAD
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
=======
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
>>>>>>> bac10b5fecf24eb8532cc47c672e916ecd0dc23e
