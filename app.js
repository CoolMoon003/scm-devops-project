id="app001"
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("SCM DevOps Project Running... 🚀");
    res.send("Hello From SCM Project....");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});