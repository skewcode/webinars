# Questions on Hoisting

1. What is the output of this snippet of code?
    ```
    function foo() {
        x = 1;
        function x() { }
        var x = '2';
        return x;
    }
    alert( typeof foo() );
    ```


2. What is the output of this snippet of code?
    ```
    function foo() {
        return x;
        x = 1;
        
        function x() { }
        
        var x = '2';
    }
    console.log( typeof foo() );
    ```
    __Source__: https://gist.github.com/MattSurabian/8867307


3. What is the output of this snippet of code?
    ```
    var x = 1;
    function foo() {
        x = 10;
        return;
        function x() {}
    }
    foo();
    console.log( x );
    ```