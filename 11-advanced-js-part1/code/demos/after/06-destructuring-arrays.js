// Array destructuring - syntax
let arr = [1, 2, 3, 4];
let [a, b] = arr;
console.log( `a = ${a}, b = ${b}` );

// Skipping items when destructuring
let [one, , three, , five, seven] = [1,2,3,4,5];
console.log( `one = ${one}, three = ${three}, five = ${five}, seven = ${seven}` );

// Separate declaration and initialization for variables when destructuring
let one_x, three_x, five_x;

[one_x, , three_x, , five_x] = [1,2,3,4,5];
console.log( `one_x = ${one_x}, three_x = ${three_x}, five_x = ${five_x}` );

// Assigning default values when destructuring
let one_y, three_y, five_y, seven_y;

[one_y, , three_y, , five_y, seven_y = 7] = [1,2,3,4,5];
console.log( one_y, three_y, five_y, seven_y );
console.log( `one_y = ${one_y}, three_y = ${three_y}, five_y = ${five_y}, seven_y = ${seven_y}` );