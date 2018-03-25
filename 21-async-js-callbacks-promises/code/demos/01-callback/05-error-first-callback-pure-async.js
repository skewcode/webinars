function sumAsync( a, b, cb ) {
    if( typeof a !== 'number' || typeof b !== 'number' ) {
        setTimeout(function() {
            error( new TypeError( 'Unsupported types. Arguments passed to sumAsync must all be numbers.' ) );
        }, 0);
        return;
    }

    setTimeout(function() {
        error( null, a + b );
    }, 2000);
}

function logResult( err, result ) {
    if( err ) {
        console.log( err.message );
    }
    console.log( 'result = ', result );
}

sumAsync( )