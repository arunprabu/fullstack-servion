const http = require('http');

http.createServer( (req, res) => {
  console.log( ' Request Received');
  console.log(req.url);
  res.write('<h1>Success</h1>');
  res.end();
}).listen(3000, () => {
  console.log('Server Started -- goto localhost:3000');
}); 

