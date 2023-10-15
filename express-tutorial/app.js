const express = require('express')
const contentType = require('content-type')
const getRawBody = require('raw-body')
const bodyParser = require('body-parser')

const app = express()

// First, use the bodyParser middleware to handle JSON requests
app.use(bodyParser.json());

app.use(function (req, res, next) {
    getRawBody(req, {
        length: req.headers['content-length'],
        limit: '1mb',
        encoding: contentType.parse(req).parameters.charset
    }, function (err, string) {
        if (err) return next(err)
        req.text = string
        next()
    })
})

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