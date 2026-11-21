
import express from "express";

// Create Express application
const app = express();

// Define port
const PORT = 5000;

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to my Express server!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
