import { Router } from "express";
import prismaClient from "../utils/prisma.js";
const router = Router()
router.get("/", async (req, res) => {
    const projects = await prismaClient.projects.findMany()
    res.json(projects).status(200)
})
router.get("/add", async (req, res) => {
    const project = await prismaClient.projects.create({
        data: {

            name: "Sample Project"
        }
    })
    res.json(project).status(201)
})
export default router;