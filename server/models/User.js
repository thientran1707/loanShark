'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  phone: {type: Number, required: true},
  email: {type: String, required: true},
  items: [Schema.Types.ObjectId],
  friends: [Schema.Types.ObjectId],
  password: {type: String, required: true},
  token: {type: String}
});

module.exports = mongoose.model('User', schema);