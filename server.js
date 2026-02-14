import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import testRoutes from './routes/test_routes.js'
import cors from 'cors'
import morgan from 'morgan'

dotenv.config()

connectDB()

const app=express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use('/api/v1',testRoutes)

const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(
        `Server running on ${process.env.DEV_MODE} on port no ${PORT}`
    )
})