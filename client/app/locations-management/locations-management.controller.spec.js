'use strict';

describe('Controller: LocationsManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('houseofmodaApp'));

  var LocationsManagementCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocationsManagementCtrl = $controller('LocationsManagementCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
