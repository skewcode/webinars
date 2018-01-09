// arguments object is different for outer() and inner() functions when the inner function is declared using the old function syntax
// Step 1: Log the arguments object in the outer function and also inner function
function outer() {
    // Step 1.3: Log arguments

    function inner() {
        // Step 1.4: Log arguments
    };

    // Step 1.2: Call inner with some other arguments
}

// Step 1.1: Call outer with some arguments


// the arguments object for an inner function declared using arrow function syntax is carried over from the enclosing function
// Step 2: Repeat step 1 but use arrow function syntax for the inner function (already defined for you)
function outer2() {
    

    let inner2 = () => {
        
    };

    
}



// we require variables for arguments (formal arguments) in order to use the arguments within an inner function using arrow function syntax
function foo( a, b ) {
    console.log( `[foo] arguments = `, arguments );

    // Step 3: Capture 2 arguments for the inner function and log them. Also log the arguments object.
    let bar = () => {

    }

    bar( 3, 4 );
}

foo( 1, 2 );