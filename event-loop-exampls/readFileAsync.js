const {readFile, writeFile} = require('fs')

console.log('started a first task')
// CHECK FILE PATH
readFile('../content/first.txt', 'utf8', (err, data) => {
if(err){
    console.log(err)
    return
}
console.log(data)
console.log('completed first task')
})
console.log('starting next task');