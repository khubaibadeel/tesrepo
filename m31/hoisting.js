// Not visible in Practicle life but is present
// as an interview question.

// In JavaScript, hoisting means declarations are processed 
// before the code runs.

// var, let, const, and functions behave differently.

// # Basic example with var:

console.log(name);

var name = "Ali";

// You might expect an error, but JavaScript prints:
// undefined
// Why? JavaScript effectively treats it like this:

var name;

console.log(name);

name = "Ali";

// So the declaration is done, but the initialization is not.