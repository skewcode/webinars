async function sumAsync( a, b, cb = () => {} ) {
    return new Promise(( resolve, reject ) => {
        if( typeof a !== 'number' || typeof b !== 'number' ) {
            var err = new TypeError( 'not all arguments are numbers' );
            reject( err );
            return cb( err );
        }

        setTimeout( () => {
            var sum = a + b;
            resolve( sum );
            return cb( null, sum );
        }, 0);
    });
}

// promise-style usage
sumAsync( 1, 2 )
    .then(
         ( sum ) => {
            console.log( sum );
            return sumAsync( 3, 4 );
        }
    )
    .then( console.log )
    .catch( console.error );

// callback-style usage
sumAsync( 1, 2, ( err, sum ) => {
    if( err ) {
        return console.error( err );
    }

    console.log( sum );
    
    sumAsync( 3, 4, ( err, sum ) => {
        if( err ) {
            return console.error( err );
        }

        console.log( sum );
    });
});