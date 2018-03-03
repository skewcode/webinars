"use strict";

(function(){
    // b = 3; // this is not allowed in strict mode
    // var a = b;
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));