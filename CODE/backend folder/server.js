const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",  // 🔥 change this
    database: "agrosmartDB"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed ❌", err);
    } else {
        console.log("MySQL Connected ✅");
    }
});

// API Route
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.log("Insert Error ❌", err);
            res.status(500).json({ message: "Error saving message ❌" });
        } else {
            console.log("New Contact Received:");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Message:", message);
            console.log("-----------------------------");

            res.json({ message: "Thanks! Message Received ✅" });
        }
    });
});

// Start Server
app.listen(5000, () => {
    console.log("Server running on port 5000 🚀");
});