# JavaScript Interview Preparation
This is a repository of tricky JavaScript interview questions. Some concepts tested in these questions may never be applied in day-to-day work. A candidate's skill should never be assessed solely based on these questions.

## Concepts
1. Data Types, Variables and Variable Declaration
    - NaN cannot be tested using ===. Use isNaN(), Number.isNaN() or value !== value instead
    - (In any language) A stored floating-point value may be an approximation
    - in an expression, values are coerced into other data types. Example boolean -> number, array -> string etc.
    - variable re-declaration does not overwrite current value if statement has no initialization for the variable.
2. Scopes of Variable Declared Using var
    - function scope or global scope - no block scope
    - scope of inner functions - function scope
    - how the scope chain works
    - declaring variables without var (i.e assigning value to a variable when it first appears in code)
    - pitfall when using ```var x = y = ... = value;```
3. Using IIFEs
    - avoiding global variables
    - effectively creating a scope for a block of code
4. Hoisting
    - variable declarations are "hoisted" to the top of the scope but assignments happen in-place
    - function declaration are hoisted to the top of the scope, even above where variables get hoisted
    - function names are normal variables - if a function is declared within another function, the nested function's name is in the enclosing function's scope.
    - function expression way of declaring functions behave like variable declarations (they in fact are variable declarations)
5. Function Context (this)
    - function's context depends on how it gets invoked, not how it is declared
    - 'this' in the global execution context - strict and non-strict mode
    - 'this' within a function - strict and non-strict mode
    - 'this' within a method of an object
        - Something to always remember: A function nested within a method of an object is NOT a method of the object - it is a normal function
        - Some scenarios for invocation
            - when invoked via the object 
            - when invoked via another reference
            - when invoked as an event handler
6. Asynchronous Functions and the Event Loop
    - setTimeout's function (srgument passed to it) is by default executed in global context - 'this' will be window (in browser)
    - even it timeout value is 0, setTimeout's function is executed only after the currently executing code is complete (function stack is clear)
    - setTimeout() is a non-blocking function - it returns immediately with undefined as the return value
7. Closures
    - What is a closure and how it works
8. The strict-mode of execution
    - variable declaration without var is not allowed
    - if not set, function context is undefined.
9. Other gotchas
    - Semi-colons are automatically inserted at the end of every line

## References
* [37 Essential JavaScript Interview Questions, on Toptal](https://www.toptal.com/javascript/interview-questions)
* [JavaScript Web Quiz, by David Shariff](http://davidshariff.com/js-quiz/)
* [JavaScript Web Quiz Answers Explanation, by Matthew Surabian](https://gist.github.com/MattSurabian/8867307)
* [JS: Basics and Tricky Questions Part - 2: intermediate](https://www.thatjsdude.com/interview/js2.html)