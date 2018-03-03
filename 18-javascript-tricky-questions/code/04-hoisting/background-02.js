// foo is hoisted to top of its scope (global scope in this case)
// function foo() {
//     console.log( 'foo was called' );
// }

// var x; // variable hoisting
// var bar; // variable hoisting - bar is undefined

foo(); // foo is available here due to hoisting

var x = 1;

function foo() { // syntax #1 for creating functions - the entire declaration is hoisted
    console.log( 'foo was called' );
}

bar(); // undefined() - undefined is not a function and cannot be called

var bar = function() { // syntax #2 for creating functions - this is a variable assignment
    console.log( 'bar was called' );
}; // in effect this would be just bar = function() { ... }