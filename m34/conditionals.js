
// if-else:
let a = 18
if (a<18){
    console.log("You are Minor.")
}
else if(a>=18 && a<=60){
    console.log("You are Adult.")
}
else {
    console.log("You are Old.")
}


// Ternary Operator:
//      "A ternary operator is a short way to write a simple if...else."

// Syntax:
//      condition ? valueIfTrue : valueIfFalse

let marks=40
let ispassorfail = marks>=40 ? "Pass" : "Fail"
console.log(ispassorfail)