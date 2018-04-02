define( 'foo1.js', [], function() {
    return function() {
        console.log( 'foo1 called' );
    };
});

console.log( 'foo1.js script executed' );