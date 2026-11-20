import http from "node:http";

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "content-type": "text/plain"
    }
    );
    res.end("Hello! My first Node.js HTTP server.");
});

server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
