const http = require('node:http');
const { readFileSync } = require('node:fs');

const pag = readFileSync('index.html', { encoding: 'utf-8' });

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  if (method === 'GET' && url === '/hola') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hola desde NODE CON GET</h1>');
  } else if (method === 'POST' && url === '/hola') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hola desde NODE CON POST</h1>');
  } else if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(pag);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Bobo</h1>');
  }
});

server.listen(8000, () =>
  console.log('Server listening in http://127.0.0.0:' + server.address().port)
);
