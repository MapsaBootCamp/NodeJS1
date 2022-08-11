const http = require('http');

const port = 8000

http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Salam")

}).listen(port, "localhost")

console.log(`server listening on ${port}...`);