var foo1 = require( './foo1' );
var foo2 = require( './foo2' );

console.log( 'bar called' );
console.log( foo1, foo2 );

function bar() {
    foo1();
    foo2();
};

module.exports = bar;