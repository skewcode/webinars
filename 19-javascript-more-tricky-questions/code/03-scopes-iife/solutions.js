// IIFE syntax
(function() {
    var x = 1;

    function foo() {
        console.log( 'foo was called' );
    }
})();

function foo() {
    (function() { // IIFE
        for( var i = 0 ; i < 10; i++ ) { // effectively, i is a block scope variable
            console.log( i );
        }
    })();
    console.log( i ); // error
}

foo();
console.log( 'i outside for loop = ', i ); // error