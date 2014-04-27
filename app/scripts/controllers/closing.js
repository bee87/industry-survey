'use strict';

/**
 * @controller ClosingCtrl
 * Closing view controller to submit email and selected
 * industries.
 */

angular.module('surveyApp')
  .controller('ClosingCtrl', function ($scope, industryData, $location) {

    $scope.data = {
      selected: industryData.getSelected(),
      email: undefined
    };

    $scope.data.count = $scope.data.selected.length;

    $scope.methods = {
      // Submit email and selected industries.
      submit: function() {
        if (!$scope.data.email) {
          return;
        }
        var payload = {
          email: $scope.data.email,
          // Array of slugs for industries
          industries: _.pluck($scope.data.selected, 'slug')
        };
        return industryData.submitData(payload)
          .success(success)
          .error(success);
      }
    };

    function success() {
      $location.path('/success');
    }

  });
