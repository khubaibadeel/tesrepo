// # Scopes in JavaScript:
//         --> Global
//         --> Functional
//         --> Block
        

// Global Scope:

let name="Khubaib"     // name is a Global Scope Variable. It can be called everywhere in the program.
function greet(){
    console.log(name);
}
greet();


// Functional Scope:

function greet1(){
    let fathername="Adeel"  // fname is a Functional Scope Variable only. Can be called in the function only.
    console.log(fathername);
}
greet1();

// Temp Command to run this file in terminal using node:
// node scopes.js
