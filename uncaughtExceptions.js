/*//First way :
//If you run this and assuming you have no file called ‘somefile.txt’ an error will be thrown.
const fs = require('fs')
fs.readFile("someFile.txt", (err, data)=> {
    if (err) {
        throw err;
    }
    console.log(data);
}); //will throw an Uncaught error

//best way to log error and fix it (let it crash)
process.on("uncaughtException", (err) => {
    console.log(err);
})*/

//second way:let it crash log and restart

process.on("uncaughtException", (err) => {
    console.log(err.name, err.message);
    console.log('Uncaught Exceptopn happen! shuting down...');

    process.exit(1);
})

//log x that is not defined and uncaughtException will handle error
console.log(x)


