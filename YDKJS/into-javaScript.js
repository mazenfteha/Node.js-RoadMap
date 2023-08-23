//typeof operator

var a;
console.log(typeof(a))

a = "hello world";
console.log(typeof(a))

a = true;
console.log(typeof(a))

a = null;
console.log(typeof(a))

a = undefined;
console.log(typeof(a))

a = { b: "c" };
console.log(typeof(a))


//Objects
var obj = {
    a: "hello world",
    b: 42,
    c: true
}
console.log(obj.a)
console.log(obj.b)
console.log(obj.c)

console.log(obj["a"])
console.log(obj["b"])
console.log(obj["c"])

//Arrays
var arr = ["hello world", 42, true]
console.log(arr)

//Built-In Type Methods
var a = "hello world"
var b = 3.14159

console.log(a.length)
console.log(a.toUpperCase())
console.log(b.toFixed(4))

//Equality
var a = "42";
var b = 42;
console.log(a == b); // true
console.log(a === b); // false

var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
a == c; // true
b == c; // true
a == b; // false

//Inequality

var a = 41;
var b = "42";
var c = "43";
a < b; // true
b < c; // true

var a = 42;
var b = "foo";
a < b; // false
a > b; // false
a == b; // false

//Hoisting
var a = 2;
foo(); // works because `foo()`
 // declaration is "hoisted"
function foo() {
    a = 3;
    console.log( a ); // 3
    var a; // declaration is "hoisted"
    // to the top of `foo()`
}
console.log( a ); // 2

function foo() {
    var a = 1;

    if(a >= 1){
        let b = 2;
        while(b < 5) {
            let c = b * 2
            b++
            console.log( a + c )
        }
    }
}

foo();
// 5 7 9

//Conditionals
if (a == 2) {
    // do something
   }
   else if (a == 10) {
    // do another thing
   }
   else if (a == 42) {
    // do yet another thing
   }
   else {
    // fallback to here
   }

   switch (a) {
    case 2:
    // do something
    break;
    case 10:
    // do another thing
    break;
    case 42:
    // do yet another thing
    break;
    default:
    // fallback to here
}

//Closure
function makeAdder(x) {
    function add(y) {
        return y + x
    }
    return add
}
var plusOne = makeAdder( 1 );
console.log(plusOne( 3 )); //4

var plusTen = makeAdder( 10 );
console.log(plusTen( 3 )); //13

//this Identier
function foo() {
    console.log( this.bar );
}
var bar = "global";
var obj1 = {
    bar: "obj1",
    foo: foo
};
var obj2 = {
    bar: "obj2"
};
foo(); // "global"
obj1.foo(); // "obj1"
foo.call( obj2 ); // "obj2"

//transpiling
function foo(a = 2) {
    console.log( a );
}
   foo(); // 2
   foo( 42 ); // 42
