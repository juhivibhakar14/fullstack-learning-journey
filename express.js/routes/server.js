
import express from "express";

const app = express();

const PORT = 5000;

// Middleware to read JSON request bodies
app.use(express.json());

// Temporary users data
let users = [
    { id: 1, name: "Juhi", role: "Developer" },
    { id: 2, name: "Rahul", role: "Designer" },
    { id: 3, name: "Priya", role: "Manager" }
];


// 1. GET - Get all users
app.get("/users", (req, res) => {

    res.status(200).json({
        message: "Users fetched successfully",
        users: users
    });

});


// 2. POST - Create a new user
app.post("/users", (req, res) => {

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        role: req.body.role
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });

});


// 3. PATCH - Update an existing user
app.patch("/users/:id", (req, res) => {

    const userId = Number(req.params.id);

    const user = users.find((u) => u.id === userId);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    if (req.body.name !== undefined) {
        user.name = req.body.name;
    }

    if (req.body.role !== undefined) {
        user.role = req.body.role;
    }

    res.status(200).json({
        message: "User updated successfully",
        user: user
    });

});


// 4. DELETE - Delete a user
app.delete("/users/:id", (req, res) => {

    const userId = Number(req.params.id);

    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const deletedUser = users.splice(userIndex, 1);

    res.status(200).json({
        message: "User deleted successfully",
        user: deletedUser[0]
    });

});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
