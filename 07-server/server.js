const http = require('http');

const server = http.createServer((req, res) => {
   if (req.url === '/getSecretData') {
      res.end('No screct data');
   }

   res.end('Hello, World!');
});

server.listen(8080);
