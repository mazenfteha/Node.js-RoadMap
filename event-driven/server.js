const http = require('http')

//Usong Event Eniiter API
const server = http.createServer()
//emits request event 
//subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('Welcom')
})

server.listen(5000)