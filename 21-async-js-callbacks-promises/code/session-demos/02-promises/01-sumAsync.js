// *** third party code ***
// sum has to be "Promisified"
function sumAsync( a, b ) {
    return new Promise(function( resolve, reject ) {
        if( typeof a !== 'number' || typeof b !== 'number' ) {
            reject( new TypeError( 'Unexpected type - first 2 arguments must be numbers' ) );
            return;
        }
    
        setTimeout(function() {
            var result = a + b;
            resolve( result );
        }, 2000);
    });
}


// *** your application code ***
function logResult( result ) {
    console.log( 'result = ', result );
}

sumAsync( 1, 2 )
    .then(function( result ) { // this functions is called when the promise resolves
        console.log( result );
        return sumAsync( 2, 3 );
    })
    .then(function( result ) {
        console.log( result );
    })
    .catch(function( err ) {
        console.log( 'error | err.message = ', err.message );
    });