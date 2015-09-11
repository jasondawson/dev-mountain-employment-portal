var app = angular.module("portalsApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/homeView");  ///As of writing this note, if this line is uncommented, it will cause the homeView route to crash.
  
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

    

    



});