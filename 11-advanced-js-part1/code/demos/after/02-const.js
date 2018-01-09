// Like let, const makes a variable block-scoped. Unlike let however, the variable's value cannot be changed
const a = 1;

// Uncommenting the following line will result in an error
// a = 2;

{
    const a = 2; // constants are block-scoped - so this is a new constant a
    console.log( 'inside the block, a = ', a );
}

console.log( 'outside the block, a = ', a );

// Note that when used to declare an object, the variable itself cannot be re-assigned, but its properties can still be changed
const obj = {
    a: 1
};

// Uncommenting the following will result in an error
/*
obj = {
    a: 2
};
*/

obj.a = 3; // this is fine
console.log( 'after resetting obj.a, obj.a = ', obj.a );

// Aside: The ES5 method Object.freeze() can be used to prevent changes to an object's structure
/*
Object.freeze( obj ); // prevents changes to the properties
obj.a = 3; // error
*/