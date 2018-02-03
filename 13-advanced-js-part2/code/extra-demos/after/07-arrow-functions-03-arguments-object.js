// arguments object is different for outer() and inner() functions when the inner function is declared using the old function syntax
function outer() {
    console.log( `[outer] arguments = `, arguments );

    function inner() {
        console.log( `[inner] arguments = `, arguments );
    };

    inner(4, 5, 6);
}

outer( 1, 2, 3 );

// the arguments object for an inner function declared using arrow function syntax is carried over from the enclosing function
function outer2() {
    console.log( `[outer2] arguments = `, arguments );

    let inner2 = () => {
        console.log( `[inner2] arguments = `, arguments );
    };

    inner2(4, 5, 6);
}

outer2( 1, 2, 3 );

// we require variables for arguments (formal arguments) in order to use the arguments within an inner function using arrow function syntax
function foo( a, b ) {
    console.log( `[foo] arguments = `, arguments );

    let bar = ( c, d ) => {
        console.log( `[bar] arguments = `, arguments ); // the enclosing function's arguments
        console.log( `c = ${c}, d = ${d}` );
    }

    bar( 3, 4 );
}

foo( 1, 2 );