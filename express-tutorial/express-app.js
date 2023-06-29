const express = require('express')
const path = require('path') //i need to send index.html filr from response
const app = express()

//setup static and middleware
app.use(express.static('./public')) //to serve style ,logo, logic

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found );</h1>')
})

app.listen(5000, () => {
    console.log('server is runing on port 5000')
})