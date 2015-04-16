'use strict';

angular.module('hmApp')

.service('PostService', function ($rootScope, $http) {

  var apiUrl = $rootScope.api;

  return {

    index: function() {
      return $http.get('http://www.haagsemakers.nl/wp-json/posts').success(function (response) {
        return response.data;
      });
    },

    show: function (params) {
      console.log(params);
      return $http({
        method: 'GET',
        url: 'http://www.haagsemakers.nl/wp-json/posts',
        params: {
          'filter[name]': params.slug
        }
      }).then(function (response) {
        return response.data;
      });
    },

    getCategories: function(){
      return $http({
        method: 'GET',
        url: 'http://www.haagsemakers.nl/wp-json/posts/types/posts/taxonomies/category/terms',
      }).then(function(response){
        return response.data;
      });
    }
  };
});
