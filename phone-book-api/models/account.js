var autoIncrement = require('mongoose-auto-increment'); //for auto incrementing during create
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

//importing connection config
var mongoose = require('./mongo');

// Create a schema 
var Schema = mongoose.Schema; 

var Account = new Schema({
  accountId: Number,
  email: { 
            type: String,
            unique: true
        },
  hash: String,
  salt: String,
  isEmailVerified: Boolean,
  status: Boolean,
  createdBy : String,
  createdOn : {type: Date, default: Date.now},
  updatedBy : String,
  updatedOn : {type: Date, default: Date.now}
});

//util method to set salt and hash for the entered password
Account.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
}

//validating password and returning true or false
Account.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};


Account.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

Account.plugin(autoIncrement.plugin, {model: 'Account', field: 'accountId', 
startAt: 1});
module.exports = mongoose.model('Account', Account);



