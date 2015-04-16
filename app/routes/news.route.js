'use strict';

angular.module('hmApp')

.config(function ($stateProvider) {

  $stateProvider

    .state('news', {
      url: '/nieuws',
      templateUrl: 'wp-content/themes/haagsemakers/app/views/news/index.html',
      controller: 'NewsCtrl'
    })

    .state('newsitem', {
      url: '/nieuws/:slug',
      templateUrl: 'wp-content/themes/haagsemakers/app/views/news/view.html',
      controller: 'NewsitemCtrl'
    })
  ;
});
