// 2 scopes for a variable declared with var keyword
// 1. global scope
// 2. function scope

// global variable - declared outside of all functions
var x = 1;

function foo() {
    var x = 4; // Note: global variable x will be accessd if var is not used
    var y = 2; // function foo-scoped variable
    console.log( 'x (in foo scope) = ', x ); // 4 (the local x)
    console.log( 'y (in foo scope) = ', y );

    if( true ) {
        var z = 3;
    }

    console.log( 'z (in foo scope - outside if block) = ', z );

    function bar() {
        var x = 5;
        console.log( 'x (in bar scope) = ', x ); // 5 (the local x)
    }

    bar(); // bar being created within foo, is accessible only within foo
}

// bar(); // error

foo(); // y will be created (but local to function)

console.log( 'x (in global scope) = ', x );
console.log( 'y (in global scope) = ', y ); // no y in global scope - error - script stops execution here