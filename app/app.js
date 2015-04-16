'use strict';

angular.module('hmApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])

  // Configure main routing and html5 mode
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  //
  .run(function($rootScope) {
    $rootScope.config = BlogInfo;
    $rootScope.api = AppAPI.url;
  })

  
  // Main application controller (attached to body in header.php).
  .controller('AppCtrl',function($rootScope, $scope, PostService){
    PostService.getCategories().then(function(res){
      $rootScope.categories = res;
    });
  })
;
