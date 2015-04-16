'use strict';

angular.module('hmApp')

    .config(function ($stateProvider) {
        $stateProvider

            .state('projects', {
                url: '/projecten',
                templateUrl: 'wp-content/themes/haagsemakers/app/views/project/index.html',
                controller: 'ProjectsCtrl'
            })

            .state('project', {
                url: '/projecten/:slug',
                templateUrl: 'wp-content/themes/haagsemakers/app/views/project/view.html',
                controller: 'ProjectCtrl'
            })
        ;
    });
