const express = require('express')
const contentType = require('content-type')
const getRawBody = require('raw-body')
const bodyParser = require('body-parser')
const hpp = require('hpp')

const app = express()

// First, use the bodyParser middleware to handle JSON requests
app.use(bodyParser.urlencoded());

app.use(hpp())


const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')



// static assets
app.use(express.static('./methods-public'))

//parse from data
app.use(express.urlencoded({extended:false }))

//parse json
app.use(express.json())

//routes
app.use('/api/people', peopleRouter)
app.use('/login', authRouter)

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})