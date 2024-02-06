const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err, data) =>{
    if(err){
        throw new Error(`cant read this file`)
    }
    console.log(data);
})

writeFile('./content/result-async.txt',`Here is the result :this is file created in async order`,(err, data) => {
    if(err){
        throw new Error(`cant read this file`)
    }
    console.log('New file created')
})