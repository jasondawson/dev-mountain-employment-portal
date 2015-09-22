<<<<<<< HEAD
var app = angular.module("portalsApp", ['ui.router', 'xeditable',"checklist-model", 'smart-table']);
=======
var app = angular.module("portalsApp", ['ui.router', 'xeditable', 'smart-table', 'ngMaterial', 'ngAnimate']);
>>>>>>> 53143f70681375a45327ba3fe329d390e38a46af

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
      templateUrl: "html-templates/homeView.html" 
    })

    .state('login', {
    	url: "/login",
    	templateUrl: "html-templates/login.html",
    	controller: "loginCreateAccountCtrl"
    })
    .state('logout',{
      url:"/homeView",
      templateUrl:"html-templates/homeView.html"
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

});

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

