import express from "express"
import authRoute from "./src/routes/auth.routes.js"
import dotenv from "dotenv"
import connectDb from "./src/lib/db.js"
import cookiePareser from "cookie-parser"

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cookiePareser())
app.use("/api/auth", authRoute)
app.listen(port, () => {
 console.log(`server is runing on port ${port}`);
 connectDb()
})