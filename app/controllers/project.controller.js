'use strict';

angular.module('hmApp')

.controller('ProjectsCtrl', function ($scope, PostService) {

  $scope.contentLoading = true;

  PostService.index({categoryName: 'project'}).then(function(result){
    // restructure projects
    $scope.projects = {};
    $scope.projects.active = [];
    $scope.projects.other = [];

    for (var i=0; i<result.posts.length; i++){
      if (result.posts[ i].fields.project_status === 'actief') {
        $scope.projects.active.push(result.posts[ i]);
      } else {
        $scope.projects.other.push(result.posts[ i]);
      }
    }

    $scope.contentLoading=null;
  });
})


.controller('ProjectCtrl', function ($scope, $stateParams, ArticleService) {

  $scope.contentLoading=true;

  ArticleService.get({slug: $stateParams.slug}).then(function(result){
    $scope.article = result.post;
    if (result.post.attachments[ 0]) {
      $scope.headerImage = result.post.attachments[ 0].images.large.url;
    }
    $scope.contentLoading=null;
  });

});
