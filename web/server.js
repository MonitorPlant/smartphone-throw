const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Groupi and SmartPhone-Throw!!!</h1>');
    res.end();
});

const port = 8001;
server.listen(port);
console.log("Server listen on port: " + port);
