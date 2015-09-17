'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var messageCtrlStub = {
  index: 'messageCtrl.index',
  show: 'messageCtrl.show',
  create: 'messageCtrl.create',
  update: 'messageCtrl.update',
  destroy: 'messageCtrl.destroy'
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
var messageIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './message.controller': messageCtrlStub,
  '../../auth/auth.service': authServiceStub
});

describe('Message API Router:', function() {

  it('should return an express router instance', function() {
    messageIndex.should.equal(routerStub);
  });

  describe('GET /api/messages', function() {

    it('should verify admin and route to message.controller.index', function() {
      routerStub.get
                .withArgs('/', 'authService.hasRole.admin' ,'messageCtrl.index')
                .should.have.been.calledOnce;
    });

  });

  describe('GET /api/messages/:id', function() {

    it('should verify admin and route to message.controller.show', function() {
      routerStub.get
                .withArgs('/:id', 'authService.hasRole.admin' ,'messageCtrl.show')
                .should.have.been.calledOnce;
    });

  });

  describe('POST /api/messages', function() {

    it('should route to message.controller.create', function() {
      routerStub.post
                .withArgs('/' ,'messageCtrl.create')
                .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/messages/:id', function() {

    it('should verify admin and route to message.controller.update', function() {
      routerStub.put
                .withArgs('/:id','authService.hasRole.admin', 'messageCtrl.update')
                .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/messages/:id', function() {

    it('should verify admin and route to message.controller.update', function() {
      routerStub.patch
                .withArgs('/:id','authService.hasRole.admin', 'messageCtrl.update')
                .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/messages/:id', function() {

    it('should verify admin and route to message.controller.destroy', function() {
      routerStub.delete
                .withArgs('/:id','authService.hasRole.admin', 'messageCtrl.destroy')
                .should.have.been.calledOnce;
    });

  });

});
