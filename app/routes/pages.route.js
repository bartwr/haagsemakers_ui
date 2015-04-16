'use strict';

angular.module('hmApp')
  .config(function ($stateProvider) {
    $stateProvider

      .state('disclaimer', {
        url: '/disclaimer',
        templateUrl: 'wp-content/themes/haagsemakers/app/views/pages/disclaimer.html',
        controller: 'PagesController'
      })

      .state('terms', {
        url: '/terms',
        templateUrl: 'wp-content/themes/haagsemakers/app/views/pages/terms.html',
        controller: 'PagesController'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: 'wp-content/themes/haagsemakers/app/views/pages/contact.html',
        controller: 'PagesController'
      })
    ;

  });
