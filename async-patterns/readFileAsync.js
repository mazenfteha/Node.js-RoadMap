const { readFile } = require('fs')

// readFile('../content/first.txt', 'utf8', (err, data) => {
//     if(err){
//         return err
//     }
//     console.log(data);
// })

const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data) => {
    if(err){
        reject(err)
    }
    resolve(data);
    })
})
}

getText('../content/first.txt').then(result => console.log(result)).catch(err => console.log(err))