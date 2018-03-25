function sumAsync( a, b, cb ) {
    setTimeout(function() {
        cb( a + b );
    }, 2000);
}

function logResult( result ) {
    console.log( 'result = ', result );
}

sumAsync( 1, 2, logResult );

// this should ideally result in an error
sumAsync( 1, 'hello', logResult );