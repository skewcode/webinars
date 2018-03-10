var x = 3; // every global variable is a property on the window object (for variables declared with var keyword) - window.x = 3

var foo = {
    x: 2,
    bar: {
        x: 1,
        baz: function() {
            return this.x;
        }
    }
};

var fbb = foo.bar.baz;

console.log( fbb() ); // window is context - hence prints 3
console.log( foo.bar.baz() ); // foo.bar object is the context - prints 1