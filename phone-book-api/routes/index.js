var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // send html resp 
  // res.write('<h1>Success</h1>');
  // res.end();

  res.send(`
    <html>
      <head>
        <title>Welcome</title>
      </head>
      <body>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
        <h1>Welcome to Home Page of Phone Book API!!!!</h1>
      </body>
    </html>
  `);
  
});

// Post, put, patch, delete can be defined here

module.exports = router;
