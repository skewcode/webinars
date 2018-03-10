# Questions on Strict Mode of Execution

1. What is the output of this snippet of code? (see section on scopes)
```
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```
Follow up question: What is one way of avoiding the such code from being executed?
__Source__: https://www.toptal.com/javascript/interview-questions

2. What is the problem with this snippet of code that defines a Person constructor function and creates an object? How can you detect when one makes this mistake?
```
function Person( name, age ) {
    this.name = name;
    this.age = age;
}

var john = Person( 'John Doe', 32 );
```