'use strict';

var mongoose = require('mongoose');
var Promise = require('bluebird');
var setting = require('../config/setting');

/* Exports */
var db = {};

db.start = function() {
  mongoose.connect(setting.databaseUrl, function(err) {
    if (err) {
      console.log('Unable to connect to database');
    } else {
      console.log('Database connected successfully');
    }
  });
};

db.connection = mongoose.connection;

db.classes = {
  User: require('./User'),
  Loan: require('./Loan'),
  Item: require('./Item')
};

module.exports = db;