'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  phone: {type: Number},
  //firstName: {type: String, required: true},
  //lastName: {type: String, required: true},
  //email: {type: String, required: true},
  items: [Schema.Types.ObjectId],
  friends: [Schema.Types.ObjectId],
  userName: {type: String, required: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('User', schema);
