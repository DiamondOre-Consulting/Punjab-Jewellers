import express from "express"
import {config} from 'dotenv'
import morgan  from "morgan"
import cookieParser from "cookie-parser"
import adminRouter from "./routes/admin.route.js"
import errorMiddleware from "./middlewares/error.middleware.js"
import { rateLimiter } from "./utils/rateLimitter.js"
import cors from 'cors'
const app= express()
config()

// app.use(rateLimiter)
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(cors({
     origin:["http://localhost:5173","http://localhost:5174"],
     credentials:true
}))

app.use("/api/v1/admin",adminRouter)


app.all("*",(req,res)=>{
     res.status(404).json({message : "OOPS! 404 Page not found"})
})
app.use(errorMiddleware);


export default app;