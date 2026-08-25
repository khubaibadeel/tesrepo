// let Example:

function greet(){
    let name="Khubaib"   // fathername cannot be used outside the 
    console.log(name);   // function/block bcz it is declared using 
}                        // 'let' datatype.
greet();
//console.log(name);     // <-- trying to print it results in an error


// var Example:

function greet1(){
    var fathername="Adeel" 
    console.log(fathername);
}
greet1();

console.log(fathername);  // fathername can be used outside the 
                          // function/block bcz it is declared using 
                          // 'var' datatype.



// Temp Command to execute this file in the terminal:
// node compare-var-and-let.js