// function z() {
//     console.log( 'z was called' );
// }

// var x;
// var y;
// var z;

var x = 1;
var x = 2; // redeclaration is allowed - redeclaration is treated as a reassignment

console.log( 'x = ', x );

var y = 2; 
var y;

console.log( 'y = ', y );

var z = 1; // z = 1 in effect
function z() {
    console.log( 'z was called' );
};


console.log( z ); // logs 1
console.log( typeof z ); // "number"