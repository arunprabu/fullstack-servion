// connect to user model
// Establish handshake with DB (from services)
const User = require("../models/user");

exports.createUser = function( userData, callback ){
  console.log('In UsersService');
  console.log(userData);
  userData.status = 'ACTIVE';

  //1. Construct our own query to Create User
  var userDao = new User(userData);
  //2. execute the query 
  userDao.save( (err, data) => {
    //3. get the status from db 
    if(!err){
      console.log(data);
    }else{
      console.log(err);
    }
    callback(err, data);   // 4. send the resp back to routes
  });

}

exports.getUsers = function( callback ){
  User.find((err, data) => {
    if(!err){
      console.log(data);
    }else{
      console.log(err);
    }
    callback(err, data);  
  });
}

exports.getUserById = function(_userId, callback) {
  console.log(_userId);
  User.findOne({ userId: _userId }, (err, data) => {
    if(!err){
      console.log(data);
    }else{
      console.log(err);
    }
    callback(err, data);  
  });
}

exports.updateUser = function(_userId, userData, callback){
  console.log(_userId);
  console.log(userData);

  User.updateOne({userId: _userId}, userData, (err, data) => {
    if(!err){
      console.log(data);
    }else{
      console.log(err);
    }
    callback(err, data);  
  });
}