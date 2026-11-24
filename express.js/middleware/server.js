import express from "express";
import logger from "./logger.js";
import authenticate from "./authenticate.js";
import validate from "./validate.js";

const app = express();
const PORT = 5000;

// Parse JSON request bodies
app.use(express.json());

// ✅ Global middleware - runs on EVERY request
app.use(logger);

// ─────────────────────────────────────────
// ROUTES
// ─────────────────────────────────────────

// GET /users - public, no auth needed
app.get("/users", (req, res) => {
    res.status(200).json({
        message: "Users fetched successfully",
        users: [
            { id: 1, name: "Juhi", role: "Developer" },
            { id: 2, name: "Rahul", role: "Designer" },
            { id: 3, name: "Priya", role: "Manager" }
        ]
    });
});

// POST /users - needs authenticate + validate middleware
app.post("/users", authenticate, validate, (req, res) => {
    const newUser = req.body;
    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});

// DELETE /users/:id - needs authenticate middleware
app.delete("/users/:id", authenticate, (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: `User ${id} deleted successfully`
    });
});

// ─────────────────────────────────────────
// START SERVER
// ─────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
