
import http from "node:http";

const server = http.createServer((req, res) => {

    // User data
    const user = {
        id: 1,
        name: "Juhi",
        role: "Developer"
    };

    // Users data
    const users = [
        {
            id: 1,
            name: "Juhi",
            role: "Developer"
        },
        {
            id: 2,
            name: "Rahul",
            role: "Designer"
        },
        {
            id: 3,
            name: "Priya",
            role: "Manager"
        }
    ];

    // Route 1: Home - Plain text
    if (req.url === "/" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Hello! My first Node.js HTTP server.");

    }

    // Route 2: About - Plain text
    else if (req.url === "/about" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("This is my Node.js server.");

    }

    // Route 3: Single user - JSON
    else if (req.url === "/user" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(user));

    }

    // Route 4: All users - JSON
    else if (req.url === "/users" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(users));

    }

    // Route 5: Not found
    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Route not found");

    }

});

// Start server
server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
