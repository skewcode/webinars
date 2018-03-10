function foo() {
    console.log( 1 ); 
    
    setTimeout(function() {
        console.log( 2 );
    }, 1000);
    
    setTimeout(function() {
        console.log( 3 );
    }, 0);
    
    console.log( 4 );
}
foo();

// browser is free now!! - order is 1 4 3 2