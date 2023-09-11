import { Router } from "express";
const router = Router()
router.get("/", (req, res) => {
    res.json([
        { id: 1, name: "Project 1" },
    ]).status(200)
})
export default router;