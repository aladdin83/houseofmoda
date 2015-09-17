'use strict';

var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');

var newLocation;

describe('Location API:', function() {
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
  
  describe('GET /api/locations', function() {
    var locations;
    
    beforeEach(function(done) {
      request(app)
        .get('/api/locations')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          locations = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      locations.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/locations', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/locations')
        .set('authorization', 'Bearer ' + adminToken)
        .send({
          city: 'New Location',
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newLocation = res.body;
          done();
        });
    });

    it('should respond with the newly created location', function() {
      newLocation.city.should.equal('New Location');
    });

  });

  describe('GET /api/locations/:id', function() {
    var location;

    beforeEach(function(done) {
      request(app)
        .get('/api/locations/' + newLocation._id)
        
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          location = res.body;
          done();
        });
    });

    afterEach(function() {
      location = {};
    });

    it('should respond with the requested location', function() {
      location.city.should.equal('New Location');
      
    });

  });

  describe('PUT /api/locations/:id', function() {
    var updatedLocation

    beforeEach(function(done) {
      request(app)
        .put('/api/locations/' + newLocation._id)
        .set('authorization', 'Bearer ' + adminToken)
        .send({
          city: 'Updated Location'
          
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedLocation = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedLocation = {};
    });

    it('should respond with the updated location', function() {
      updatedLocation.city.should.equal('Updated Location');
      
    });

  });

  describe('DELETE /api/locations/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/locations/' + newLocation._id)
        .set('authorization', 'Bearer ' + adminToken)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when location does not exist', function(done) {
      request(app)
        .delete('/api/locations/' + newLocation._id)
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
