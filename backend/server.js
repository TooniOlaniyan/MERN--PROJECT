const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')

//i cant see your taskbar...i one accesss chrome

connectDB()
 
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/' , (req , res )=>{
    res.status(200).json({message: 'welcome to the api support desk'})
})
// routes

app.use('/api/users' , require('./routes/UserRoutes')) 
app.use('/api/tickets' , require('./routes/ticketRoutes')) 

// middlewares

app.use(errorHandler)
app.listen(PORT , ()=> console.log(`Server started on ${PORT}`))
