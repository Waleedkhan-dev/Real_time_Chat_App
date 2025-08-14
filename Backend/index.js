import express from "express"
import authRoute from "./src/routes/auth.routes.js"
import messageRoute from "./src/routes/message.routes.js"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./src/lib/db.js"
import cookiePareser from "cookie-parser"
import cors from "cors"
import jwt from "jsonwebtoken"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY...U2U5g4.dUi6t-rRRE3iXvYJcFg "

const decoded = jwt.decode(token);
console.log(decoded);

const app = express()
const port = process.env.PORT
app.use(cors({
 origin: "http://localhost:5173",
 credentials: true
}))
app.use(express.json())
app.use(cookiePareser())
app.use("/api/auth", authRoute)
app.use("/api/message", messageRoute)
app.listen(port, () => {
 console.log(`server is runing on port ${port}|| 5000`);
 connectDb()
})