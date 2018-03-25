function sum( a, b, success, error ) {
    if( typeof a !== 'number' || typeof b !== 'number' ) {
        error( new TypeError( 'Unexpected type - first 2 arguments must be numbers' ) );
        return;
    }

    setTimeout(function() {
        var result = a + b;
        success( result ); // cb function gets the result
    }, 2000);

    // return undefined;
}

function logResult( result ) {
    console.log( 'result = ', result );
}

function logError( err ) {
    console.log( err.message );
}

sum( 1, 2, logResult, logError );
sum( 1, 'hello', logResult, logError );