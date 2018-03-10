/**
 * Every function in JS has a context (i.e. what the 'this' keyword refers to)
 * For a global function, the context is by default the window object (assuming a browser environment)
 * In strict mode - it is undefined
 * The context of a function (this) varies with the way it is called
 */
// 'use strict';

function foo() {
    console.log( this ); // window in a browser
}
foo(); // window

function bar() {
    'use strict';
    console.log( this ); // undefined - since it's strict mode
}
bar();

var obj = {
    a: 1,
    logA: function() {
        console.log( this ); // this refers to the object itself (of which logA is a method)
        console.log( this.a );
        
        function inner() { // this function is inside the method logA of obj - it itself is NOT a method of obj
            console.log( 'this within inner() : ', this );
        }

        var inner2 = arg => {
            console.log( 'this within inner2() : ', this ); // when obj.logA() is called, this will also have context (this) as the object obj
        };

        inner(); // context is window
        inner2();
    }
};
obj.logA(); // gets called a sthe method of an object - so this refers to the object obj

var globalLogA = obj.logA;
globalLogA(); // context of the function is now window!

function sum() {
    console.log( arguments );
}
sum( 1, 2 );
sum( 3, 4, 5, 6 );
