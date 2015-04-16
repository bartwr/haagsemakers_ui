'use strict';

angular.module('hmApp')

  .service('ArticleService', function ($rootScope, $http) {

    var apiUrl = $rootScope.api;

    return {
      index: function (params) {
        params = params || {};
        return $http({
          method: 'GET',
          url: apiUrl,
          params: {
            json: 'stories/get_stories',
            section: params.section,
            featured: params.featured
          }
        }).then(function (response) {
          return response.data;
        });
      },

      get: function (params) {
        return $http({
          method: 'GET',
          url: apiUrl,
          params: {
            json: 'get_post',
            section: params.section,
            slug: params.slug
          }
        }).then(function (response) {
          return response.data;
        });
      }
    };
  });
