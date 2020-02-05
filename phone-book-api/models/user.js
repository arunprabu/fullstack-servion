var autoIncrement = require('mongoose-auto-increment'); //for auto incrementing during create

//importing connection config
var mongoose = require('./mongo');

// Create a schema 
var Schema = mongoose.Schema; 

var User = new Schema({
  userId: Number,
  name: String,
  phone: Number,
  email: String,
  status: String,
  createdBy : String,
  createdOn : {type: Date, default: Date.now},
  updatedBy : String,
  updatedOn : {type: Date, default: Date.now}
},  {strict: false});

User.plugin(autoIncrement.plugin, {model: 'User', field: 'userId', 
startAt: 1});
module.exports = mongoose.model('User', User);



