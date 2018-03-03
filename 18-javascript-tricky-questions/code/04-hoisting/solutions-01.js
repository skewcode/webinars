function foo() {
    // function x() { }
    // var x;
    x = 1;
    function x() { }
    var x = '2'; // x = '2'
    return x;
}
console.log( typeof foo() );  // "string"