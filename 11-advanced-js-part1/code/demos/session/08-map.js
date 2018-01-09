// *** Map ***
var map = new Map();

var keyStr = 'string key';
var keyObj = { k: 1 };
var keyFunc = function() {};

// Setting map entries using set()
map.set( keyStr, 1 );
map.set( keyObj, 2 );
map.set( keyFunc, 3 );

// The size property - number of entries in a map
console.log( 'map.size = ', map.size );

// Fetching values using get() - the key will be compared internally using ==
console.dir( 'map.get( keyStr ) = ', map.get( keyStr ) );
console.dir( 'map.get( keyObj ) = ', map.get( keyObj ) );
console.dir( 'map.get( keyFunc ) = ', map.get( keyFunc ) );

console.dir( 'map.get( \'string key\') = ', map.get( 'string key' ) );
console.dir( 'map.get( { k: 1 } ) = ', map.get( { k: 1 } ) );
console.dir( 'map.get( function() {} ) = ', map.get( function() {} ) );

// The following return iterator objects
console.log( map.keys() );
console.log( map.values() );
console.log( map.entries() );

// Iterating a map using forEach()
map.forEach(function( value, key ) {
    console.log( key, value );
});

// You can create a map from an array of 2-tuples
var arr = [ [ 1, 2 ], [ 'str-key', 'str-value' ] ];
var map2 = new Map( arr );
console.log( 'map2.get( 1 ) = ', map2.get( 1 ) );
console.log( 'map2.get( \'str-key\' ) = ', map2.get( 'str-key' ) );

// You can create an array from an iterable like a map, using Array.from()
var arr2 = Array.from( map2 );
console.log( 'array created from map = ', arr2);