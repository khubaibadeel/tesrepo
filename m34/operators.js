// # Operators in JavaScript:
//         --> Arithmetic Operators
//         --> Increment/Decrement (++, --)
//         --> Assignment Operators (=, +=)
//         --> Comparison Operators (==, ===, !=, <, >)
//         --> Logical Operators (&&, ||, !)
//         --> Ternary Operator


// Arithmetic:
let a = 1
let b = 2

console.log(a + b)    // Output: 3


// Increment/Decrement:
let x = 1

a++

console.log(a)        // Output: 2


// Assignment:
let num = 2           // Assigned the value '2' to variable 'num'


// Comparison:
const name = "Khubaib"
let surname = "Adeel"

console.log(name == surname)   // Output: false


// const fname = "Khubaib"
// let fsurname = "Khubaib"
// console.log(fname == fsurname)   // Output: true


let age_1 = "25"
let age_2 = 25

console.log(age_1 == age_2)    // Output: true
// Values are the same, and datatype is not checked with ==


let f_age = "40"
let m_age = 40

console.log(f_age === m_age)   // Output: false
// Values are the same, but datatype is also checked with ===


// Logical:
let hasCNIC = true
let student_age = 20

console.log(student_age >= 18 && hasCNIC)   // Output: true


// Conditionals are in the next file