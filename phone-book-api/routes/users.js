var express = require('express');
var router = express.Router();

var usersService = require('../services/usersService');

/* POST Request. */
router.post('/', (req, res, next) => {
  usersService.createUser(req.body, (err, data) => {
    if(!err){
      console.log(data);
      res.json(data);
    }else{
      console.log(err);
      res.json(err);
    }
  }); 
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  usersService.getUsers( (err, data) => {
    if(!err){
      console.log(data);
      res.json(data);
    }else{
      console.log(err);
      res.json(err);
    }
  });
});

/* GET user by id */ 
router.get('/:id', (req, res, next) => {
  console.log(req.params);  // reading url params 
  
  usersService.getUserById(req.params.id, (err, data)=>{
    if(!err){
      console.log(data);
      res.json(data);
    }else{
      console.log(err);
      res.json(err);
    }
  });
});

/* PUT user */
router.put('/:id', (req, res, next) =>{
  console.log(req.params.id);
  console.log(req.body);

  usersService.updateUser(req.params.id, req.body, (err, data) =>{
    if(!err){
      console.log(data);
      res.json(data);
    }else{
      console.log(err);
      res.json(err);
    }
  });

});

/* DELETE user request */
router.delete('/:id', (req, res, next) => {
  console.log(req.params.id);

  res.json({ status: 200, info: 'Deleted Successfully!'});
});

module.exports = router;
