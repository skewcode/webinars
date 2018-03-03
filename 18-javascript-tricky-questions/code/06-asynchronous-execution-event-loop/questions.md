# Questions on Asynchronously Executed Code and the Event Loop

1. What is the output of this snippet of code?
    ```
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
    ```
    __Source__: https://www.toptal.com/javascript/interview-questions


2. What is the problem with the sum function which tries to calculate the sum after a second? How can you correct this problem?
    ```
    function sum( a, b ) {
        setTimeout(function() {
            return a + b;
        }, 1000);
    }
    console.log( sum( 1, 2 ) );
    ```


3. The following recursive code will cause a stack overflow if the array list is too large.
    ```
    var list = readHugeList();

    var nextListItem = function() {
        var item = list.pop();

        if( item ) {
            // process the list item...
            nextListItem();
        }
    };
    ```
    However, the following small change while calling the function recursively works for an array that is arbitrarily large. How so?
    ```
    var list = readHugeList();

    var nextListItem = function() {
        var item = list.pop();

        if( item ) {
            // process the list item...
            setTimeout( nextListItem, 0 );
        }
    };
    ```
    __Source__: https://www.toptal.com/javascript/interview-questions