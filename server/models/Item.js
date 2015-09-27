'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: {type: String, required: true},
  description: {type: String},
  owner: {type: Schema.Types.ObjectId}
});

module.exports = mongoose.model('Item', schema);