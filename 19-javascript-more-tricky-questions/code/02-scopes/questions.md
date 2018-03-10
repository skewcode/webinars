# Questions on Variable Scopes, Scope Chain

1. What is the output of this snippet of code?
    ```
    (function(){
    var a = b = 3;
    })();

    console.log( 'a defined? ' + ( typeof a !== 'undefined' ) );
    console.log( 'b defined? ' + ( typeof b !== 'undefined' ) );
    ```
    Follow up question: What is one way of avoiding such code from being executed? (see section on strict mode)
    __Source__: https://www.toptal.com/javascript/interview-questions