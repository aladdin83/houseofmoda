'use strict';

var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');

var newMessage;

describe('Message API:', function() {
  var adminToken;
  
  before(function(){
    var user = new User({
      name: 'fake admin',
      email: 'fakeadmin@admin.com',
      password: 'password',
      role: 'admin'
    });
    return user.saveAsync();
  });
  
  before(function(done){
    request(app)
      .post('/auth/local')
      .send({
        email: 'fakeadmin@admin.com',
        password: 'password'
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res){
        adminToken = res.body.token
        done();
      })
  });
  
  after(function(){
      return User.removeAsync();
    });
  
  describe('GET /api/messages', function() {
    var messages;

    beforeEach(function(done) {
      request(app)
        .get('/api/messages')
        .set('authorization', 'Bearer ' + adminToken)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          messages = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      messages.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/messages', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/messages')
        .send({
          name: 'New Message'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newMessage = res.body;
          done();
        });
    });

    it('should respond with the newly created message', function() {
      newMessage.name.should.equal('New Message');
    });

  });

  describe('GET /api/messages/:id', function() {
    var message;

    beforeEach(function(done) {
      request(app)
        .get('/api/messages/' + newMessage._id)
        .expect(200)
        .set('authorization', 'Bearer ' + adminToken)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          message = res.body;
          done();
        });
    });

    afterEach(function() {
      message = {};
    });

    it('should respond with the requested message', function() {
      message.name.should.equal('New Message');
    });

  });

  describe('PUT /api/messages/:id', function() {
    var updatedMessage

    beforeEach(function(done) {
      request(app)
        .put('/api/messages/' + newMessage._id)
        .set('authorization', 'Bearer ' + adminToken)
        .send({
          name: 'Updated Message'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMessage = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMessage = {};
    });

    it('should respond with the updated message', function() {
      updatedMessage.name.should.equal('Updated Message');
    });

  });

  describe('DELETE /api/messages/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/messages/' + newMessage._id)
        .set('authorization', 'Bearer ' + adminToken)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when message does not exist', function(done) {
      request(app)
        .delete('/api/messages/' + newMessage._id)
        .set('authorization', 'Bearer ' + adminToken)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
