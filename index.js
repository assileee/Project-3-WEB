const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js");
const sqlite3 = require("sqlite3").verbose();

//MIDDLEWARE
app.use(express.json());

//users endpoint
app.use("/api/", usersRouter);

//HOME GET METHOD
app.get("/", (req, res) => {
    res.json({
        msg: "Welcome to my users API!",
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Open the database connection
const db = new sqlite3.Database("./users.db", (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to the SQLite database.");

        // Create the users table if it doesn't exist
        db.run(
            `CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstName TEXT NOT NULL,
                lastName TEXT NOT NULL
            )`,
            (err) => {
                if (err) {
                    console.error("Error creating table:", err.message);
                }
            }
        );
    }
});

// Replacing the usersArray with a query from the database
app.get("/api/users", (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

module.exports = db;
