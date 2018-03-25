/**
 * Promises were introduced in ES2015 (ES6) - they are also called "thenables"
 * 
 * A Promise object represents the future result of an asynchronous operation. A promise can be in one of three states - pending, fulfilled (aka resolved) or rejected. A promise is said to be settled if it is either fulfilled or rejected. Each of these represents the state of an expected event of interest.
 * 
 * Promises simplify code involving multiple asynchronous operation by
 * 1. Avoiding nesting of callbacks (referred to as callback hell/Christmas tree problem)
 * 2. Supports execution of resolve/reject handlers even when corresponding event has completed in the past
 * 3. Supports multiple resolve/reject handlers
 * 4. Supports chaining of method calls
 * 5. Has constructs for synchronizing multiple asynchronous operations
 */
function sumAsync( a, b ) {
    /**
     * The Promise constructor is passed a function that gets resolve() and reject() functions.
     * The function is executed synchronously
     * Call resolve() to fulfil a promise and reject() to reject it
     * The arguments passed to resolve() and reject() are passed to then() and catch() handlers
     * However a promise is always fulfilled or rejected asynchronously
     */
    let promise = new Promise(function( resolve, reject ) {
        console.log( '[1] started executing the promise constructor\'s function' );

        if( typeof a !== 'number' || typeof b !== 'number' ) {
            // reject is usually passed an error object or someting indicating an error, but this is not necessary - it can be passed any arbitrary arguments
            // since a promise is resolved asynchronously, setTimeout() is not required
            return reject( new TypeError( 'not all arguments are numbers' ) );
        }

        setTimeout( () => resolve( a + b ), 2000 );
    });

    console.log( '[2] about to return the promise' );

    return promise;
}

// The Promise API basically tries to mimic the try..catch construct
sumAsync( 1, 2 )
    .then( console.log )
    .catch( console.error );

// This is allowed but not recommended, as it will lead to an unhandled reject for promise returned by then() when resolve handler of then() throws and error (see next example for understanding this)
sumAsync( 3, 4 ).then( console.log, console.error );

sumAsync( 1, 'hello' )
    .then( console.log )
    .catch( console.error );

// this executes first since a promise is always resolved or rejected asynchronously
console.log( '[3] end of script' );