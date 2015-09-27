'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  phone: {type: Number, required: true},
  items: [Schema.Types.ObjectId],
  friends: [Schema.Types.ObjectId],
  userName: {type: String, required: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('User', schema);