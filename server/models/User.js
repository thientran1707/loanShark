'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  phone: {type: Number},
  items: [Schema.Types.ObjectId],
  friends: [Schema.Types.ObjectId],
  userName: {type: String, required: true},
  password: {type: String, required: true},
  createdDate: {type: Date}
});

module.exports = mongoose.model('User', schema);
