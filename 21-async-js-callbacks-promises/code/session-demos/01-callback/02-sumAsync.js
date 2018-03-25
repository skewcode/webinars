function sum( a, b, cb ) {
    setTimeout(function() {
        var result = a + b;
        cb( result ); // cb function gets the result
    }, 2000);

    // return undefined;
}

function logResult( result ) {
    console.log( 'result = ', result );
}

var result = sum( 1, 2, logResult );