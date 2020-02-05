const passport = require('passport');

const Account = require("../models/account");


//signup flow
exports.signup = function( accountData, callback ){
  var accDAO =  new Account(accountData);
  //1. encrypt the p/w 
  accDAO.setPassword(accountData.password); 
  console.log(accDAO);
  //2. save the dao with salt and hash
  accDAO.save( (err, data) =>{
    if(!err){
      //console.log(data);
      if(data && data.accountId > 1){
        let status = { 
          statusCode : 200,
          statusInfo: 'Account Created Successfully!'
        }
        callback(err, status);
      }
    }else{
      console.log(err);
      callback(err, data);
    }
  });
}



//login flow
exports.login = function(req, callback){
  console.log(req);

  // 1. check whther the p/w is valid or not 
  // 2. use passportjs to authenticate
  //auth flow with passport
  passport.authenticate('local', function(err, account, info){
    // If Passport throws/catches an error
    if (err) {
      callback(err);
    }

    // If a user is found
    if(account){      
      var status = {  
                        email : account.email, 
                        statusCode: 200,
                        statusInfo: 'Auth Successful!',
                        token: account.generateJWT()
                     }
      callback(err, status);
    } else {
      // If account is not found, send the following from routes
      //res.status(401).json(info);
      callback(err, info);
    }
  })(req, callback);


}