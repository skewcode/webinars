function sum( a, b ) {
    setTimeout(function() {
        return a + b;
    }, 1000);
}
console.log( sum( 1, 2 ) );