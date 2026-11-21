
import http from "node:http";

const user = {
    id: 1,
    name: "Juhi",
    role: "Developer"
};

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

const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Google"
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "Microsoft"
    }
];

const server = http.createServer((req, res) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);

    // GET /
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Hello! My first Node.js HTTP server.");
    }

    // GET /about
    else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("This is my Node.js server.");
    }

    // GET /user
    else if (req.url === "/user" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(user));
    }

    // GET /users
    else if (req.url === "/users" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(users));
    }

    // GET /jobs
    else if (req.url === "/jobs" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(jobs));
    }

    // POST /users
    else if (req.url === "/users" && req.method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const newUser = JSON.parse(body);

            console.log("Received user:", newUser);

            res.writeHead(201, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                message: "User created successfully",
                user: newUser
            }));
        });
    }

    // DELETE /users
    else if (req.url === "/users" && req.method === "DELETE") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "User deleted successfully"
        }));
    }

    // 404 - Route not found
    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Route not found");
    }
});

server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
