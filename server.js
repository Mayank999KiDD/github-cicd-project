
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello! My application is deployed using GitHub Actions.");
});

app.get("/health", (req, res) => {
    res.send("Application is healthy!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
