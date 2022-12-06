import express from 'express'
import {contecctDB} from "./Config/db"
import UserRoute from "./Router/usrtRouter"
import blogRouter from "./Router/usrtRouter"

const app=express()
app.use(express.json())
contecctDB()
app.use('/api/v1/auth',UserRoute)
app.use('/api/v1/blog',blogRouter)

const PORT =  process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(" Server is work in Port number "+PORT)
})