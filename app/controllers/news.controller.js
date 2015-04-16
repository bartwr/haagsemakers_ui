'use strict';

angular.module('hmApp')

.controller('NewsCtrl', function ($scope, PostService) {

  $scope.contentLoading = true;

  PostService.index({categoryName: 'nieuws'}).then(function(result){
    $scope.news = result.posts;
    $scope.contentLoading=null;
  });
})


.controller('NewsitemCtrl', function ($scope, $stateParams, PostService) {

  $scope.contentLoading=true;

  PostService.show({slug: $stateParams.slug}).then(function(result){
    console.log(result);
    $scope.newsitem = result[0];
    $scope.contentLoading=null;
  });
});
