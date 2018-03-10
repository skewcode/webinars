function foo() {
    // function x() { }
    // var x;

    return x;
    x = 1;
    
    function x() { } // pass 2 : ignored
    
    var x = '2'; // pass 2 : x = '2'
}
console.log( typeof foo() ); // "function"