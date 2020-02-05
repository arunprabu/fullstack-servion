const http = require('http');

http.createServer( (req, res) => {
  console.log( ' Request Received');
  console.log(req.url);

  res.writeHead(200, {"Content-Type": "application/json"});  
  
  switch(req.url){
    case '/':
      res.write(`{ appName: 'Phone Book', version: '1.0'} `);
      break;
    case '/users': 
      console.log(req.method);
      res.write(`[{ name: 'arun', email:'a@b.com', phone: 2424234}]`);
      // identify the db url -- with port 
      // db cred 
      // execute the query 
      // get the data from db 
      // constuct the data as json resp 
      break;
    default: 
      res.write(`{err: '404 - URL not found'}`);
  }
  
  res.end();
}).listen(3000, () => {
  console.log('Server Started -- goto localhost:3000');
}); 

