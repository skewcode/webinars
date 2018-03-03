// call and apply do EXACTLY the same thing - which one you use depends on the scneario
function foo( a, b ) {
    console.log( this, a, b ); // this refers to the function's context
}

foo(); // for a function called using a direct reference, the context when the function is called (i.e. the "this") is "window" object im browser (in strict mode it is undefined)

// call() and apply are used to change the function context when it is called
// if you want to pass comma-separated argument to call (which are in turn passed to foo), use call
foo.call(
    {
        a: 1
    },
    1, 2
);

// if you have the arguments to be passed to foo as an array [ arg, arg2 ]
var args = [1, 2];
foo.apply(
    {
        a: 1
    },
    args
);



