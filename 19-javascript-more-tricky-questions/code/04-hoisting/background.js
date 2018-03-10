function demo1() {
    // Pass 1 - allocates memory - creates variables
    // var x, y; // only creates variables in pass 1 - does not assign values

    console.log( 'x (before declaration) = ', x ); // prints undefined - error in other languages - in JS it is not
    var x = 1; // x = 1;
    console.log( 'x (after declaration) = ', x );


    var y; // does nothing in effect in pass 2 (execution phase)
    console.log( 'y (after declaration) = ', y ); // undefined
}

// demo1();