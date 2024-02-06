// const userError = new TypeError("Something happened!");
// console.log(userError.name); // TypeError
// console.log(userError.message); // Something happened!
// console.log(userError.stack);

/*
1. Exceptions
The most common way for functions to deliver errors is by throwing them
*/

function parseJSON(data) {
    return JSON.parse(data);
  }
try {
    const result = parseJSON('A string')
    console.log(result);
} catch (error) {
    console.log(error.message);
}

/*To utilize this pattern in your functions, 
all you need to do is add the throw keyword before an instance of an error. 
This pattern of error reporting and handling is idiomatic 
for functions that perform synchronous operations. */

function square(num) {
    if(typeof num !== 'number') {
        throw new TypeError(`Expected number but got: ${typeof num}`);
    }
    return num * num;
}

try {
    square('8')
} catch (error) {
    console.log(error.message)
}

/* 2. Error-first callbacks */

const fs = require('fs');

fs.readFile('/path/to/file.txt', (err, result) => {
  if (err) {
    console.error(err);
    return;
  }

  // Log the file contents if no error
  console.log(result);
});

function square(num, callback) {
    if (typeof callback !== 'function') {
      throw new TypeError(`Callback must be a function. Got: ${typeof callback}`);
    }
  
    // simulate async operation
    setTimeout(() => {
      if (typeof num !== 'number') {
        // if an error occurs, it is passed as the first argument to the callback
        callback(new TypeError(`Expected number but got: ${typeof num}`));
        return;
      }
  
      const result = num * num;
      // callback is invoked after the operation completes with the result
      callback(null, result);
    }, 100);
  }

square('8', (err, result) => {
if (err) {
    console.error(err)
    return
}

console.log(result);
});