const express = require("express")
const app = express()
app.get("/projects", (req, res) => {
    res.json([
        { id: 1, name: "Project 1" },
    ]).status(200)
})
app.listen(3000, () => console.log("Server running on port 3000"))