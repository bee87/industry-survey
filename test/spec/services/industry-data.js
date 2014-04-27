'use strict';

describe('Service: industryData', function () {

  // load the service's module
  beforeEach(module('surveyApp'));

  // instantiate service
  var industryData;
  beforeEach(inject(function (_industryData_) {
    industryData = _industryData_;
  }));

  it('should get data', function () {
    expect(!!industryData.get()).toBe(true);
  });

  it('should chunk array', function() {
    var data = industryData.get();
    var chunked = industryData.chunk(data, 4);
    expect(chunked[0].length).toBe(4);
  });

});
