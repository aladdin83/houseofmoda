'use strict';

describe('Controller: ContactusCtrl', function () {

  // load the controller's module
  beforeEach(module('houseofmodaApp'));

  var ContactusCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactusCtrl = $controller('ContactusCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
