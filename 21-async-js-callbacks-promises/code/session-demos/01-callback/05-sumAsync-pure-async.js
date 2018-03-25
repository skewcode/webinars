function sum( a, b, cb ) {
    if( typeof a !== 'number' || typeof b !== 'number' ) {
        setTimeout(function() {
            cb( new TypeError( 'Unexpected type - first 2 arguments must be numbers' ) );
        }, 0);
        return;
    }

    setTimeout(function() {
        var result = a + b;
        cb( null, result );
    }, 2000);
}

function logResult( err, result ) {
    if( err ) {
        console.log( 'error occured | message = ', err.message );
        return;
    }

    console.log( 'result = ', result );
}

sum( 1, 2, logResult );
sum( 1, 'hello', logResult );
console.log( 'end of script' );