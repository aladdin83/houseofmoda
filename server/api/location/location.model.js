'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  city: String,
  coords: Object,
  phone: String,
  addressLine1: String,
  addressLine2: String,
  active: Boolean
});

module.exports = mongoose.model('Location', LocationSchema);
