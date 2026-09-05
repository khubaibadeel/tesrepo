
// There are 3 types of Loops in JavaScript:
//     For Loop
//     While Loop
//     Do-While Loop


// Syntax of For Loop:
// for (initialization ; condition ; inc/dec) {}


// Basic Example:
// for (let i=1;i<=10;i++)
// {
//     console.log("Hello World")
// }

// Practical Example: How to manage the data coming from the server in structure of Arrays

let array=[1,2,3,4,5]
for (let val of array){
    console.log(val)
}


// Practical Example: How to manage the data coming from the server in structure of Objects

let obj = {name:"Khabaib", fname:"Adeel", age:16}
for (let key in obj){
    console.log(key, obj[key])
}