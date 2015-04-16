'use strict';

angular.module('hmApp')

  .config(function ($stateProvider) {
    $stateProvider

      .state('articles', {
         url: '/articles',
         templateUrl: 'wp-content/themes/haagsemakers/app/views/article/index.html',
         controller: 'ArticlesCtrl'
      })

      .state('article', {
         url: '/articles/:section/:slug',
         templateUrl: 'wp-content/themes/haagsemakers/app/views/article/view.html',
         controller: 'ArticleCtrl'
      })
    ;
  });
