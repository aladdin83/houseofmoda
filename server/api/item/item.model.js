'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  barcode: String,
  price: Number,
  size: String,
  active: Boolean
});

module.exports = mongoose.model('Item', ItemSchema);
