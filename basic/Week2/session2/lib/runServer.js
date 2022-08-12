import * as http from "http"
const port = 8000

http.createServer(async (req, res) => {

    const buffers = [];

    for await (const chunk of req) {
      buffers.push(chunk);
    }
  
    const data = Buffer.concat(buffers).toString();
    console.log(data);
    // console.log(JSON.parse(data).todo); // 'Buy the milk'
    
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Salam chetori????")

}).listen(port, "localhost")

console.log(`server listening on ${port}...`);