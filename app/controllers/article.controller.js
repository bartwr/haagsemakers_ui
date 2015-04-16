'use strict';

angular.module('hmApp')

  .controller('ArticlesCtrl', function ($scope, $http, ArticleService) {
    $scope.contentLoading = true;
    ArticleService.index().then(function(articles){
      $scope.articles = articles.posts;
      $scope.contentLoading=null;
    });

  })


  .controller('ArticleCtrl', function ($scope, $stateParams, ArticleService) {

    $scope.contentLoading=true;

    ArticleService.get({slug: $stateParams.slug}).then(function(result){
      $scope.article = result.post;
      $scope.contentLoading=null;
    });

  });
