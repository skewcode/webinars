# Questions on Function Context (this)

1. What is the output of this snippet of code? 
    ```
    var obj = {
        numbers: [ 1, 2, 3, 4, 5 ],
        multipler: 2,
        printMultiplicationTable: function() {
            this.numbers.forEach(function( number ) {
                console.log( number + ' * ' + this.multipler + ' = ' + ( number * this.multiple ) );
            });
        }
    };
    obj.printMultiplicationTable();
    ```


2. What is the output of this snippet of code?
    ```
    var obj = {
        x: 1,
        getX: function () {
            return this.x;
        }
    };

    var globalGetX = obj.getX;

    console.log( globalGetX() );
    console.log( obj.getX() );
    ```
    How can the statement calling globalGetX() be fixed so that it prints the value of obj.x?


3. What is the output of this snippet of code?
    ```
    var x = 3;

    var foo = {
        x: 2,
        bar: {
            x: 1,
            baz: function() {
                return this.x;
            }
        }
    }

    var fbb = foo.bar.baz;

    console.log( fbb() );
    console.log( foo.bar.baz() );
    ```


4. What is the output of this snippet of code? (see also a function's arguments object)
    ```
    var length = 10;
    function fn() {
        console.log( this.length );
    }

    var obj = {
        length: 5,
        method: function( fn ) {
            fn();
            arguments[0]();
        }
    };

    obj.method( fn, 1 );
    ```
    __Source__: https://www.toptal.com/javascript/interview-questions