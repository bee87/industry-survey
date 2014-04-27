'use strict';

/**
 * @module surveyApp
 * Main module setup with dependency
 * declaration.
 */

angular
  .module('surveyApp', [
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap.buttons'
  ])
  .config(function ($routeProvider) {
    // App routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/closing', {
        templateUrl: 'views/closing.html',
        controller: 'ClosingCtrl'
      })
      .when('/success', {
        controller: 'SuccessCtrl',
        templateUrl: 'views/success.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location, industryData, $anchorScroll) {
    // Reroute to landing page if the user goes directly to
    // an inner page without selecting industries first.
    $rootScope.$on('$routeChangeStart', function(event, next) {
      if (next.$$route.originalPath !== '/' && !industryData.getSelected().length) {
        $location.path('/');
      }
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      $anchorScroll();
    });
  });
