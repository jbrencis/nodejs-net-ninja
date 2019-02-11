const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hey ninjas');
});

server.listen(3000, 'localhost');
console.log('Yo dawgs, now listening to port 3000');
