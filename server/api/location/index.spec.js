'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var locationCtrlStub = {
  index: 'locationCtrl.index',
  show: 'locationCtrl.show',
  create: 'locationCtrl.create',
  update: 'locationCtrl.update',
  destroy: 'locationCtrl.destroy'
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
var locationIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './location.controller': locationCtrlStub,
  '../../auth/auth.service': authServiceStub
});

describe('Location API Router:', function() {

  it('should return an express router instance', function() {
    locationIndex.should.equal(routerStub);
  });

  describe('GET /api/locations', function() {

    it('should route to location.controller.index', function() {
      routerStub.get
                .withArgs('/', 'locationCtrl.index')
                .should.have.been.calledOnce;
    });

  });

  describe('GET /api/locations/:id', function() {

    it('should route to location.controller.show', function() {
      routerStub.get
                .withArgs('/:id', 'locationCtrl.show')
                .should.have.been.calledOnce;
    });

  });

  describe('POST /api/locations', function() {

    it('should verify admin and route to location.controller.create', function() {
      routerStub.post
                .withArgs('/', 'authService.hasRole.admin', 'locationCtrl.create')
                .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/locations/:id', function() {

    it('should verify admin and route to location.controller.update', function() {
      routerStub.put
                .withArgs('/:id', 'authService.hasRole.admin' ,'locationCtrl.update')
                .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/locations/:id', function() {

    it('should verify admin and route to location.controller.update', function() {
      routerStub.patch
                .withArgs('/:id', 'authService.hasRole.admin' ,'locationCtrl.update')
                .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/locations/:id', function() {

    it('should verify admin and route to location.controller.destroy', function() {
      routerStub.delete
                .withArgs('/:id', 'authService.hasRole.admin' ,'locationCtrl.destroy')
                .should.have.been.calledOnce;
    });

  });

});
