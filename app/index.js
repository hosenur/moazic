import express from 'express'
import cors from "cors"
import projectRouter from "./routes/Projects.js"
const app = express()
app.use(cors())
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/projects",projectRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})