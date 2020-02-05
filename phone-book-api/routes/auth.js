var express = require('express');
var router = express.Router();

var authService = require('../services/authService');

/* POST Request. */
router.post('/signup', (req, res, next) => {
  
  authService.signup(req.body, (err, data) =>{
    if(!err){
      console.log(data);
      res.json(data);
    }else{
      console.log(err);
      res.json(err);
    }
  });
});


router.post('/login', ( req, res ) => {
  console.log(req.body);
  
  authService.login( req, ( err, data) => {
    if(!err){
      console.log(data);
      res.json(data);
    }else{
      res.json(err);
    }
  });
});

module.exports = router;