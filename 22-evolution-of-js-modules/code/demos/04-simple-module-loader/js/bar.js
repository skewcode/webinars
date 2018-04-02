define( 'bar.js', [ 'foo1.js', 'foo2.js' ], function( foo1, foo2 ) {
    // "private" variables and function
    var x, y, z;
    console.log( 'bar called' );
    console.log( foo1, foo2 );

    return function() {
        // "public" interface
        foo1();
        foo2();
    };
});