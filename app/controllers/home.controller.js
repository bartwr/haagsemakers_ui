'use strict';

angular.module('hmApp')

.controller('HomeController', function($rootScope, $scope, ArticleService, PostService) {

  //$scope.contentLoading=true;
  //$scope.newsLoading = true;

  // // Get 4 featured articles
  // ArticleService.index({
  //   count: 3,
  //   featured:'true'
  // }).then(function(result){
  //   $scope.articles = result.posts;
  //   delete $scope.contentLoading;
  //   console.log(result);
  // });

  // Get 10 last news items
  PostService.index({
    categoryName: 'nieuws',
    count: 10,
    page: 1
  }).then(function(result){
    console.log(result.data);
    $scope.news = result.data;
    delete $scope.newsLoading;
  });

});
