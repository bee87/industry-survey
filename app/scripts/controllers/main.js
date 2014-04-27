'use strict';

/**
 * @controller MainCtrl
 * Landing view controller for selecting
 * industries.
 */

angular.module('surveyApp')
  .controller('MainCtrl', function ($scope, industryData, $location) {

    // Max number of industries
    // that can be selected.
    var MAX_SELECTED = 4;

    // Initial Scope data.
    $scope.data = {
      industries: industryData.chunk(industryData.get(), 4)
    };

    $scope.methods = {
      getSelected: function() {
        return industryData.getSelected();
      },
      // An item is disabled if it's currently
      // not selected and total selected items
      // have reached max limit.
      isDisabled: function(item) {
        return !item.selected && this.getSelected().length >= MAX_SELECTED;
      },
      // Ensure proper behavior when an item is selected.
      // The random button would select a randomized industry.
      checkSelection: function(item) {
        if (this.getSelected().length > MAX_SELECTED) {
          item.selected = false;
          return;
        }
        if (item.random) {
          item.selected = false;
          return this.selectRandom();
        }
      },
      // Select random industry based on currently
      // unselected industries.
      selectRandom: function() {
        var candidates = _.filter(_.flatten($scope.data.industries), function(item) {
          return !item.random && !item.selected;
        });
        var rand = industryData.randomInt(0, candidates.length - 1);
        candidates[rand].selected = true;
      },
      // If there's at least an industry selected
      // move to the next page.
      submit: function() {
        if (!this.getSelected().length) {
          return;
        }
        $location.path('/closing');
      }
    };

  });



