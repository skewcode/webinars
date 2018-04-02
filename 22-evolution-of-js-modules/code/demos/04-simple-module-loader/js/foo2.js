define( 'foo2.js', [], function() {
    return function() {
        console.log( 'foo2 called' );
    };
});

console.log( 'foo2.js script executed' );