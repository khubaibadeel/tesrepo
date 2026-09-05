// The Concept of Closures in MERN Stack is very Important that its even asked during the Interviews of the Students!


// Lexical Scope:-
// "Function can access the variables in its surroundings, based on where it is written in the code."

function outer(){
    let course="MERN"

    function inner(){
        console.log(course) // The Inner Function can still access the course variable which is declared in the outer variable. This is Lexical Scope.
    }

    inner() // outer function calls inner function which further prints course's value.
}
outer()


// Closure:-

function outerFunc(){
    let name="Khubaib"
    function innerFunc(){
        console.log(name)
    }
    innerFunc()
}

const myFunction=outerFunc()
myFunction()