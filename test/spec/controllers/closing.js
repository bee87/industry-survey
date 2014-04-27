'use strict';

describe('Controller: ClosingCtrl', function () {

  // load the controller's module
  beforeEach(module('surveyApp'));

  var ClosingCtrl,
    scope,
    $location,
    industryData,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    $location = $injector.get('$location');
    industryData = $injector.get('industryData');
    $httpBackend = $injector.get('$httpBackend');

    industryData.get()[0].selected = true;
    $httpBackend.expect('POST', 'api/submit')
      .respond({success: true});

    scope = $rootScope.$new();
    ClosingCtrl = $controller('ClosingCtrl', {
      $scope: scope
    });
  }));

  it('should submit selected data', function () {
    scope.data.email = 'test@example.com';
    scope.methods.submit();
    $httpBackend.flush();
    expect($location.path()).toBe('/success');
  });
});
