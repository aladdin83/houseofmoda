/**
 * Sequelize initialization module
 */

'use strict';

var path = require('path');
var config = require('../config/environment');

var Sequelize = require('sequelize');

var db = {
  Sequelize: Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Item = db.sequelize.import('../api/item/item.model');
db.Thing = db.sequelize.import('../api/thing/thing.model');

module.exports = db;
