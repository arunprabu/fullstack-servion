const http = require('http');

http.createServer( (req, res) => {
  console.log( ' Request Received');
  console.log(req.url);
  res.writeHead(200, {"Content-Type": "application/json"});  
  res.write(`{ name: 'arun', phone: '43453245'} `);
  res.end();
}).listen(3000, () => {
  console.log('Server Started -- goto localhost:3000');
}); 

