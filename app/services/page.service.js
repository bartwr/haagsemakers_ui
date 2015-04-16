'use strict';

angular.module('hmApp')

  .service('PagesService', function ($rootScope, $http) {

    var apiUrl = $rootScope.api;

    return {
      show: function (slug) {
        var promise = $http({
          method: 'GET',
          url: apiUrl,
          params: {
            json: 'get_page',
            slug: slug
          }
        }).then(function (response) {
          return response.data;
        });
        return promise;
      }
    }
  });
