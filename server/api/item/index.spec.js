'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var itemCtrlStub = {
  index: 'itemCtrl.index',
  show: 'itemCtrl.show',
  create: 'itemCtrl.create',
  update: 'itemCtrl.update',
  destroy: 'itemCtrl.destroy'
};

var authServiceStub = {
  isAuthenticated: function() {
    return 'authService.isAuthenticated';
  },
  hasRole: function(role) {
    return 'authService.hasRole.' + role;
  }
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var itemIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './item.controller': itemCtrlStub,
  '../../auth/auth.service': authServiceStub
});

describe('Item API Router:', function() {

  it('should return an express router instance', function() {
    itemIndex.should.equal(routerStub);
  });

  describe('GET /api/items', function() {

    it('should route to item.controller.index', function() {
      routerStub.get
                .withArgs('/', 'itemCtrl.index')
                .should.have.been.calledOnce;
    });

  });

  describe('GET /api/items/:id', function() {

    it('should route to item.controller.show', function() {
      routerStub.get
                .withArgs('/:id', 'itemCtrl.show')
                .should.have.been.calledOnce;
    });

  });

  describe('POST /api/items', function() {

    it('should verify admin role and route to item.controller.create', function() {
      routerStub.post
                .withArgs('/', 'authService.hasRole.admin' , 'itemCtrl.create')
                .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/items/:id', function() {

    it('should verify admin role and route to item.controller.update', function() {
      routerStub.put
                .withArgs('/:id', 'authService.hasRole.admin' ,'itemCtrl.update')
                .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/items/:id', function() {

    it('should verify admin role and route to item.controller.update', function() {
      routerStub.patch
                .withArgs('/:id', 'authService.hasRole.admin' ,'itemCtrl.update')
                .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/items/:id', function() {

    it('should verify admin role and route to item.controller.destroy', function() {
      routerStub.delete
                .withArgs('/:id', 'authService.hasRole.admin' ,'itemCtrl.destroy')
                .should.have.been.calledOnce;
    });

  });

});
