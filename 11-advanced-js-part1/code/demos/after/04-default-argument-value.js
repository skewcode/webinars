/**
 * Default parameters
 */

function incr( a, step = 1 ) {
    return a + step;
}

let stepper = (function stepper() {
    var _counter = 1;

    return function() {
        return _counter++;
    }
}());

// stepper() call is evaluated at runtime
function incr2( a, step = stepper() ) {
    return a + step;
}

console.log( incr( 10, 2 ) );
console.log( incr( 10 ) );
console.log( incr( 10, undefined ) );

console.log( incr2( 10, 2 ) );
console.log( incr2( 10 ) );
console.log( incr2( 10 ) );
console.log( incr2( 10 ) );