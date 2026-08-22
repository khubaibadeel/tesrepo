

// The Datatype let was introduced in ES6(ECMA Script 2015), released in 2015 
// We avoid var in modern JavaScript because it introduces unpredictable behavior, lacks block-scoping, and silently allows duplicate declarations, which can cause hard-to-find bugs

// var name="Khubaib"
// name = "Adeel"
// console.log(name)

// let name="Khubaib"
// name="Adeel"
// console.log(name)

const cnic="1234"       // "1234"<-- Is Permanently Stored value
// cnic="123456"            gets error if tried to change
console.log(cnic)