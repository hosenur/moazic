const express = require("express")
const router = express.Router()
router.get("/", (req, res) => {
    // res.json([
    //     { id: 1, name: "Project 1" },
    // ]).status(200)
    res.send("projects")
})
module.exports = router;