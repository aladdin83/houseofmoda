'use strict';

describe('Directive: adminSidePanel', function () {

  // load the directive's module and view
  beforeEach(module('houseofmodaApp'));
  beforeEach(module('components/admin-side-panel/admin-side-panel.html'));

  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should ...');
});
