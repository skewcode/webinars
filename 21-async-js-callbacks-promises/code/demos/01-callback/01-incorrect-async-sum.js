function sum( a, b ) {
    setTimeout(function() {
        return a + b;
    }, 2000);
}

var result = sum( 1, 2 );
console.log( 'result = ', result );