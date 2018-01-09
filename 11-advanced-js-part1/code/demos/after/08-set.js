// *** Set ***
var set = new Set();

// Adding set entries using add()
set.add( 1 ).add( { a: 1 } ).add( function foo() {}) .add( [ 1, 2, 3 ] );

// The size property - number of entries in a set
console.log( 'set.size = ', set.size);
console.log( 'set = ', set );

// Test if an entry exists in a set
console.log( set.has( { a: 1 } ) );

// Remove entries in a set - the item will be compared internally using ==
set.delete( 1 );
console.log( 'set after removing entry 1 = ', set );

set.delete( { a: 1 } );
console.log( 'set after trying to remove entry { a: 1 } = ', set );

// The following return iterator objects - unlike a map, each of these iterators is same in a set
console.log( set.keys() );
console.log( set.values() );
console.log( set.entries() );

// Iterating a set using forEach()
set.forEach(function( value, key ) {
    console.log( value, key );
});

// You can create an array from an iterable like a set, using Array.from()
console.log( 'array created from set = ', Array.from( set ) );

// You can create a map from an array - duplicates are not added (comparison using ==)
var set2 = new Set( [ 1, 2, 3, 4, 2, 3 ] );
console.log( 'set2 created from an array = ', set2 );

// using spread on sets
console.log( ...set2 );

// concatenating sets/arrays using spread
var set3 = [ 3, 4, 5 ];
var set4 = new Set( [ ...set2, ...set3 ] );
console.log( 'set4 (concatenation of set2 and set3 = ', set4 );