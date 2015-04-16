'use strict';

angular.module('hmApp')

  .directive('footer', function($rootScope){
    return {
      restrict: 'AE',
      templateUrl: $rootScope.config.templateDir + '/app/directives/footer/footer.html',
      scope: true
    }
  });
