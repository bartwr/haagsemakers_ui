'use strict';

angular.module('hmApp')

  .directive('navbar', function($rootScope, $location, $state){
    return {
      restrict: 'AE',
      templateUrl: $rootScope.config.templateDir + '/app/directives/navbar/navbar.html',
      scope: true,
      link: function($scope,$elem,$attrs){
        $scope.menu = [{
          'title': 'Artikelen',
          'link': 'home',
          'soon':false
        },{
          'title': 'Nieuws',
          'link': 'news',
          'soon':false
        },{
          'title': 'Projecten',
          'link': 'projects',
          'soon': false
        },{
          'title': 'Kaart',
          'link': 'map',
          'soon': true
        },{
          'title': 'Kalender',
          'link': 'calender',
          'soon': true
        }];

        $scope.isActive = function(statename) {
          return statename === $state.current.name;
        };
      }
    }
  });
