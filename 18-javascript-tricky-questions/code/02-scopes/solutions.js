// (function() {})() // IIFE
// global scope vs function scope
(function() {
    // var a = b = 3; // functions scope variables
    b = 3; // this is a global variable - no var used
    var a = b;
})();

// global scope
console.log( 'a defined? ' + ( typeof a !== 'undefined' ) ); // false
console.log( 'b defined? ' + ( typeof b !== 'undefined' ) ); // true

console.log( 'b = ', b );