function sumAsync( a, b, success, error ) {
    if( typeof a !== 'number' || typeof b !== 'number' ) {
        return error( new TypeError( 'Unsupported types. Arguments passed to sumAsync must all be numbers.' ) );
    }

    setTimeout(function() {
        error( null, a + b );
    }, 2000);
}

function onSuccess( result ) {
    console.log( 'result = ', result );
}

function onError( err ) {
    if( err ) {
        console.log( err.message );
    }
}

sumAsync( 1, 2, onSuccess, onError );
sumAsync( 1, 'hello', onSuccess, onError );

