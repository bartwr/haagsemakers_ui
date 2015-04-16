'use strict';

angular.module('hmApp')
  .config(function ($stateProvider) {
    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'wp-content/themes/haagsemakers/app/views/home/home.html',
          //template: 'mmmm',
        controller: 'HomeController'
      });
  });
