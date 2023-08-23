//variables

a = 21
b = a * 2
console.log(b)


var a = "42"
var b = Number(a)

console.log( a ); // "42"
console.log( b ); // 42
/*Using Number(..) (a built-in function) as shown is an explicit coer‐
cion from any other type to the number type. That should be pretty
straightforward*/


var amount = 99.99;
amount *= 2;
console.log( amount ); // 199.98
amount = "$" + String(amount)
console.log( amount ); // "$199.98

//Conditionals
var amount = 99.99;
if(amount > 10){
    amount *= 2
    console.log( amount )
}

var bank_balance = 302.13;
var amount = 99.99;
if(bank_balance > amount) {
    console.log("I want to buy this phone!")
}

const ACCESSORY_PRICE = 9.99
var bankBalance = 302.13;
var amount = 99.99;

amount *= 2 ;
if(bankBalance > amount){
    console.log("I want to buy this phone!")
    amount = amount + ACCESSORY_PRICE
    console.log( "I'll take the accessory!" );
} else {
    console.log( "No, thanks." );
}

//Loops

// while (condition) {
//     // Code to be executed while the condition is true
// }

let count = 1
while (count <= 5) {
    console.log(count);
    count++;
}

//do...while loop, the code block is executed at least once before the condition is checked.
// let userInput;
// do {
//     userInput = prompt("Enter a positive number: ");
// } while (userInput <= 0);

// console.log("You entered a positive number:", userInput);

for (var i = 0; i <= 9; i = i + 1) {
    console.log( i );
}
   // 0 1 2 3 4 5 6 7 8 9



//Functions
/*A function is generally a named section of code that can be “called”
by name, and the code inside it will be run each time.
*/

function printAmount () {
    console.log(amount.toFixed(2))
}

var amount = 99.99 ;
printAmount() // "99.99"

amount = amount * 2;
printAmount(); // "199.98"

function formatAmount() {
    return "$" + amount.toFixed( 2 );
}
amount = formatAmount();
console.log( amount ); 

const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
 // calculate the new amount with the tax
    amt = amt + (amt * TAX_RATE)

    return amt
}

var amount = 99.99;
amount = calculateFinalPurchaseAmount( amount );
console.log( amount.toFixed( 2 ) ); // "107.99"

//Scope

function one() {
    // this `a` only belongs to the `one()` function
    var a = 1;
    console.log( a );
}
function two() {
    // this `a` only belongs to the `two()` function
    var a = 2;
    console.log( a );
}
   one(); // 1
   two(); // 2