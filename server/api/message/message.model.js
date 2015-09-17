'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  body: String,
  active: Boolean
});

module.exports = mongoose.model('Message', MessageSchema);
