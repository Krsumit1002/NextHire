import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app=express()

app.get('/',(req,res)=>{
    res.send('Welcome to NextHire')
})

const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(
        `Server running on ${process.env.DEV_MODE} on port no ${PORT}`
    )
})