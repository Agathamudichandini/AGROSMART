const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Contact Route
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("New Contact Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("---------------------------");

    res.json({ message: "Thanks! Message Received ✅" });
});

// Start Server
app.listen(5000, () => {
    console.log("Server running on port 5000 🚀");
});
// Feedback Route
app.post("/feedback", (req, res) => {
    const { name, experience, rating } = req.body;

    console.log("New Feedback Received:");
    console.log("Name:", name);
    console.log("Experience:", experience);
    console.log("Rating:", rating);
    console.log("============================");

    res.json({ message: "Feedback Submitted Successfully ⭐" });
});