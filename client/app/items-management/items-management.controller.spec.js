'use strict';

describe('Controller: ItemsManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('houseofmodaApp'));

  var ItemsManagementCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItemsManagementCtrl = $controller('ItemsManagementCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
