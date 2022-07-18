const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT

const app = express()

app.get('/' , (req , res )=>{
    res.json({message: 'welcome to the api support desk'})
})

app.use('/api/users' , require('./routes/UserRoutes'))
app.listen(PORT , ()=> console.log(`Server started on ${PORT}`))
