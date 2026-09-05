

// Arrow Functions:
// Arrow Function was Introduced in ES6 (ECMAScript 2015).

// Used to simplify the syntax of the functions we define.
// Arrow functions are used in Modern JavaScript Development.


// Normal Function:-
function greet(name){
    console.log("Hello " + name)
}
greet("Khubaib")


// Functional Expression:-
intro=function(name){
    console.log("Are you really "+name+"?")
}
intro("Khubaib")

// Arrow Function:-
const marks=(marks)=>{
    console.log("You have got " + marks + " marks.")
    if (marks>=70)
        console.log("Good Job")
    else
        console.log("You have to Work Hard!")
}
marks(90)

// Arrow Function having Single Parameter:-
// Square Finder:
const square = (n) => n * n
console.log(square(9))


