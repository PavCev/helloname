const http = require('http');
const port = process.env.port || 8080;

const requestListener = function(req,res) {
    res.writeHead(200);
    res.end('Hello');
}

const server = http.createServer(requestListener);
server.listen(port);