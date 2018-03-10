function foo() {
    console.log( 'foo called' );
}

// the second argument - dealy, is specified in milliseconds
// the delay is a minimum time after which to execute foo - not an assurance to execute after 2 seconds
// setTimeout( foo, 2000 );

// only once the browser is free, this foo function will be executed immediately 
setTimeout( foo, 0 ); // 0 DOES NOT mean immediate

// browser will get busy
for( var i = 0; i < 100000000; i++ ) {
    if( i % 10000 === 0 ) {
        console.log( i );
    }
}

// the function call stack is empty - the browser is free at this point of time

// *******************************************************

// callback pattern
function sum( a, b, logSum ) {
    // this inner function will get called internally by the browser - the browser gets the return value
    setTimeout(function() {
        console.log( 'inner function got called' );
        var result = a + b;
        logSum( result );
    }, 1000);
}

function logSum( result ) {
    console.log( 'result = ', result );
}

// we have called sum
console.log( sum( 1, 2, logSum ) ); // undefined