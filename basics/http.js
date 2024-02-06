const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p> we cant find the page you are looking for </p>
        `)
})

server.listen(2500)