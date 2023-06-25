const EventEmitter = require('events')

const customEmiiter = new EventEmitter()

customEmiiter.on('response', (name, id) => {
    console.log(`data recieved user name is ${name} with id: ${id}`)
})

customEmiiter.on('response', () => {
    console.log(`some other logic here`)
})

customEmiiter.emit('response', 'mazen', 1)