(function foo() {
  // Step 1.1: Create a variable 'a' using let keyword and try re-declaring it
  // Step 1.2: Declare another variable 'a' inside a block.
  // Step 1.3 Log the value of 'a' both within and outside the block
}());

// unlike a variable declared using var keyword, a global variable declared using let does not get added as property of the global object (window in a browser, global in node.js etc.)
// Step 2.1: Declare a variable with let and check its existence as a property of window object
// Step 2.2: Declare a variable with var and check its existence as a property of window object

// let declarations are not hoisted - uncommenting the following line results in an error
// Step 3: Access an variable before its creation using let keyword. The variable is not hoisted and the access will result in an error