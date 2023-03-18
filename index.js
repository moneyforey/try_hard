const express = require('express')
const dbConnect = require('./src/config/db')
const studentRouter = require('./src/student/stucent.route')
const server = express()
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

// server.get('/',(req,res)=>res.send('<h1>welcome</h1>'))

server.use('/student', studentRouter);

server.listen(8080, async() =>{ 
      dbConnect();
     console.log('http://localhost:8080')
    })