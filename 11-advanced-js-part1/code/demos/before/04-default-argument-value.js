/**
 * Default parameters
 */

// Step 1: Provide a default value of 1 to step
function incr( a, step ) {
    return a + step;
}

let stepper = (function stepper() {
    var _counter = 1;

    return function() {
        return _counter++;
    }
}());

// stepper() call is evaluated at runtime
// Step 2.1: Provide a default value to step by calling stepper()
function incr2( a, step ) {
    return a + step;
}

// Step 2.2: Check out what the following log
console.log( incr( 10, 2 ) );
console.log( incr( 10 ) );
console.log( incr( 10, undefined ) );

console.log( incr2( 10, 2 ) );
console.log( incr2( 10 ) );
console.log( incr2( 10 ) );
console.log( incr2( 10 ) );