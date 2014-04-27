'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('surveyApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should select random', function () {
    expect(scope.methods.getSelected().length).toBe(0);
    scope.methods.selectRandom();
    expect(scope.methods.getSelected().length).toBe(1);
  });

  it('should disable selection', function() {
    scope.$apply(function() {
      _.times(4, function(n) {
        scope.data.industries[0][n].selected = true;
      });
    });
    var disabled = scope.methods.isDisabled(scope.data.industries[1][1]);
    expect(disabled).toBe(true);
  });
});
