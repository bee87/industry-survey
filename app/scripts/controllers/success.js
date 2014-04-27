'use strict';

/**
 * @controller SuccessCtrl
 * Success!
 */

angular.module('surveyApp')
  .controller('SuccessCtrl', function ($scope, $timeout) {
    $scope.isLoading = true;
    $timeout(function() {
      $scope.isLoading = false;
    }, 2000);
  });
