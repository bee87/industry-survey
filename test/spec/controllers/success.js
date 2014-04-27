'use strict';

describe('Controller: SuccessCtrl', function () {

  // load the controller's module
  beforeEach(module('surveyApp'));

  var SuccessCtrl,
    scope,
    $timeout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    $timeout = $injector.get('$timeout');
    jasmine.Clock.useMock();
    scope = $rootScope.$new();
    SuccessCtrl = $controller('SuccessCtrl', {
      $scope: scope
    });
  }));

  it('should remove loading after 2 seconds', function () {
    expect(scope.isLoading).toBe(true);
    jasmine.Clock.tick(2001);
    $timeout.flush();
    expect(scope.isLoading).toBe(false);
  });
});
