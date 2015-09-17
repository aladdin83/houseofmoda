'use strict';

var app = require('../../app');
var Item = require('./item.model');
var request = require('supertest');
var User = require('../user/user.model');

var newItem;

describe('Item API:', function() {
    var item;
    var user;
    var adminToken;
    
    //Clear Items before testing
    before(function(){
      return Item.removeAsync().then(function(){
        item = new Item({
          barcode: "10500",
          price: "500",
          sizes: "S M"
        });
      });
    });
    
    before(function(){
      return User.removeAsync().then(function() {
      user = new User({
        name: 'Fake User',
        email: 'test@test.com',
        password: 'password',
        role: 'admin'
      });

      return user.saveAsync();
      });
    });
    
    before(function(done){
      request(app)
       .post('/auth/local')
       .send({
         email: 'test@test.com',
         password: 'password'
       })
       .expect(200)
       .expect('Content-Type', /json/)
       .end(function(err, res){
         adminToken = res.body.token;
         done();
       })
    });
    
    //CLear Items after testing
    after(function(){
      return Item.removeAsync();
    });
    
    after(function(){
      return User.removeAsync();
    });
    
    
    describe('POST /api/items', function(){
      var resp;
      beforeEach(function(done){
        request(app)
        .post('/api/items')
        .expect(401)
        .end(function(err, res){
          if(err){
            return done(err);
          }
          resp = 401;
          done();
        })
      });
      
      it('should respond with forbidden access', function(){
        resp.should.be.equal(401);
      });
      
    });

  describe('GET /api/items', function() {
    var items;
    
    beforeEach(function(done) {
      request(app)
        .get('/api/items')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          items = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      items.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/items', function() {
    
    it('should respond with the newly created item', function(done) {
      request(app)
        .post('/api/items')
        .set('authorization', 'Bearer ' + adminToken)
        .send({
          barcode: 'New Item'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          res.body.barcode.should.equal('New Item');
          newItem = res.body;
          done();
        });
      
    });

  });

  describe('GET /api/items/:id', function() {
    var item;

    beforeEach(function(done) {
      request(app)
        .get('/api/items/' + newItem._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          item = res.body;
          done();
        });
    });

    afterEach(function() {
      item = {};
    });

    it('should respond with the requested item', function() {
      item.barcode.should.equal('New Item');
    });

  });

  describe('PUT /api/items/:id', function() {
    var updatedItem

    beforeEach(function(done) {
      request(app)
        .put('/api/items/' + newItem._id)
        .set('authorization', 'Bearer ' + adminToken)
        .send({
          barcode: 'Updated Item'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedItem = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedItem = {};
    });

    it('should respond with the updated item', function() {
      updatedItem.barcode.should.equal('Updated Item');
    });
    
    it('should respond with 401 when not using admin account', function(done){
      request(app)
        .put('/api/items/' + newItem._id)
        .send({
          barcode: 'Updated Item'
        })
        .expect(401)
        .end(function(err, res){
          if(err){
            return done(err);
          }
          done();
        });
    });

  });

  describe('DELETE /api/items/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/items/' + newItem._id)
        .set('authorization', 'Bearer ' + adminToken)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when item does not exist', function(done) {
      request(app)
        .delete('/api/items/' + newItem._id)
        .set('authorization', 'Bearer ' + adminToken)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });
    
    it('shout respond with 401 when not using admin account', function(done){
      request(app)
        .delete('/api/items/' + newItem._id)
        .expect(401)
        .end(function(err, res){
          if(err){
            return done(err);
          }
          done();
        });
    });

  });

});
