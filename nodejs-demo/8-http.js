const http = require('http');

http.createServer( (req, res) => {
  console.log( ' Request Received');
  console.log(req.url);
  
  function getFullPage(pageName){
    return `<html>
      <head><title>Trying NodeJS Http</title></head>
      <body>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/products'>Products</a></li>
          <li><a href='/services'>Services</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
        <h1>Welcome to ${pageName} Page</h1>
      </body>
    </html>`; 
  }
  
  res.writeHead(200, {"Content-Type": "text/html"});  
  switch(req.url){
    case '/':
      res.write(getFullPage('Home'));
      break;
    case '/about':
      res.write(getFullPage('About'));
      break;
    case '/products':
      res.write(getFullPage('Products'));
      break;
    case '/services':
      res.write(getFullPage('Services'));
      break;
    case '/contact':
      res.write(getFullPage('Contact'));
      break;
    default:
      res.write(getFullPage('Page Not Found'));
  }

  res.end();

}).listen(3000, () => {
  console.log('Server Started -- goto localhost:3000');
}); 

