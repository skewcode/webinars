var x = 1;
function foo() {
    // function x() {}
    x = 10; // this modifies the local x (earlier a function that was hoisted)
    return;
    function x() {}
}
foo();
console.log( x ); // 1