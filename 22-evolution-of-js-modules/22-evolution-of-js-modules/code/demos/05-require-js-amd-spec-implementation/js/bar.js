// requirejs.config({
//     baseUrl: 'js',
// });

define( [ 'foo1', 'foo2' ], function( foo1, foo2 ) {
    console.log( 'bar called' );
    console.log( foo1, foo2 );
    return function() {
        foo1();
        foo2();
    };
});