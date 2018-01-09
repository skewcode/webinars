// A single or double-quoted string can span only one line - it is possible to use the \ character at the end of a line, in order to continue the string onto the next line - but this is cumbersome. Also the newline character is to be escaped to have newlines in the string.
let greeting = "Hello";

// ES2015 introduces backtick (the ` character) enclosed strings. The newlines and other whitespaces are preserved as such.
// Step 1: Create a backtick enclosed string spanning multiple lines. Log it.


// It is possible to include variable inside backtick strings by enclosing it within ${..}. The variable is evaluated when the string itself is evaluated (i.e. gets declared and initialized, ot simply assigned). This feature is called interpolation. This is a little more convenient than concatenating strings with variables.
let name = 'John'

// Before ES6: concatenating strings with variables
// Step 2.1: Use string concatenation to log the greeting message for the above name
// Step 2.2: Use interpolation syntax i.e. ${var} to do the same 


// Another example of interpolation
function greeting() {
    return Math.random() <= 0.5 ? 'Good morning' : 'Good evening';
}

// Call greeting() a few times to get a randomly generated greeting message
// Step 3: Function calls can also be interpolated. Log random greetings using interpolation syntax