// Not visible in Practicle life but is present
// as an interview question.

// In JavaScript, hoisting means declarations are processed 
// before the code runs.

// var, let, const, and functions behave differently.


// # Example with 'var':

console.log(name);

var name = "Ali";

// You might expect an error, but JavaScript prints "undefined".
// Why? JavaScript effectively treats it like this:

var name;

console.log(name);

name = "Ali";
// So the declaration is done, but the initialization is not.



// # Example with 'let':
console.log(age);

let age = 25;

// This gives an error: ReferenceError: Cannot access 'age' before initialization

// let is technically hoisted too, but you cannot use it 
// before the declaration line.



// # Example with 'const':
// With const, the variable is hoisted, but it stays in the Temporal 
// Dead Zone until JavaScript reaches its declaration.

console.log(name);

const name = "Ali";

// This gives: ReferenceError: Cannot access 'name' before initialization
