/*Stacktrace is displayed when an unexpected error by a 
nodejs javascript engine. It helps developers to debug and 
fix the issues. 

*/

// 1 - using try catch

// try {
//     throw new Error("Custom Error")
// } catch (error) {
//     console.log(error)
// }

// 2 - stack property

//console.log(new Error("custom error").stack);

// 3 - Consle trace function

//console.trace("show me")

// 4 - using process unhandledRejection event

process.on('unhandledRejection', function(err, promise) {
    console.error('Unhandled rejection',error);
});

// 5 - use captureStackTrace function in error

const myemp = {id: 11, name: "Eric"};
Error.captureStackTrace(myemp)
console.log(myemp.stack);