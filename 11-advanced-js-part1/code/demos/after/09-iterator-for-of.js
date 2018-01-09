/**
 * ES2015 introduces a new construct - for..of loop, for iterating over a group of objects called Iterables (data structures that can be iterated over). Arrays, Strings and Array-like objects (arguments object of a function, DOM NodeList etc.) are all iterables. Additionally ES2015 introduces new iterable data structures like Map, Set etc.
 * 
 * Note: Unlike for..in loop, the loop variable is assigned the value, rather than index/property name. Aditinally only collection properties are returned by for..of as against all enumerable properties that are returned by for..in
 */

/**
 * Iterate over an array using for..in loop
 * i is the index
 * order not guaranteed
 * applicable in general to object
 */
// using const ensures we don't update the values in the loop (use let if you want to update)
for( const i in [ 10, 20, 30, 40 ] ) {
    console.log( `inside for..in loop i = `, i );
}

/**
 * Iterate over an array using for..of loop
 * v is the value
 * order is guaranteed
 * applicable to iterables only
 */
for( const v of [ 10, 20, 30, 40 ] ) {
  console.log( `inside for..in loop v = `, v );
}

// iterating over a string gives the characters of the string
let str = `hello`;
for(const char of str) {
    console.log(char);
}