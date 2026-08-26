
// # Operators in JavaScript:
//         --> Arithmatic Operators
//         --> Increment/Decrement (++, --)
//         --> Assignment Operators (=, +=)
//         --> Comparison Operators (==,===,!=,<,>)
//         --> Logical Operators (&&, ||, !)
//         --> Ternary Operator

// Arithmatic:
let a=1
let b=2
console.log(a+b)    // Output: 3


// Increment/Decrement:
let x=1
a++
console.log(a)      // Output: 2


// Assignment:
let num=2           // Assigned the value '2' to variable 'num'


// Comparison:
const name = "Khubaib"
let surname = "Adeel"
console.log(name == surname)   // Output: false

// const fname = "Khubaib"
// let fsurname ="Khubaib"
// console.log(fname == fsurname)   // Output: true

let age_1= "25"
let age_2 = 25
console.log(age_1 == age_2)    // Output: true 
                            // bcz values are same and datatype is not judged

let f_age= "40"
let m_age= 40
console.log(f_age === m_age)    // Output: false
                            // bcz values are same but datatype is also judged.


// Logical:
let hasCNIC=true
let student_age=20

console.log( student_age>=18 && hasCNIC)   // Output: true
