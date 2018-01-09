/**
 * Rest (collect trailing arguments as an array)
 */
let square = n => n * n;

function map( transform, ...arr ) { // previously done with [].slice.call(arguments, 1)
    return arr.map(transform);
}

console.log( map( square, 1, 2, 3, 4, 5 ) );

// combining rest with destructuring - example 1
function foo(x, ...[a, ,b, ,c] ) {
    return a + b + c; 
}
console.log( foo( 1, 2, 3, 4, 5, 6 ) );

// combining rest with destructuring - example 2
var arr = [1,2,3,4,5];
let [a,b,...rest] = arr;
console.log( arr );

/**
 * Spread (spread out array items as arguments)
 */
console.log( Math.max.apply( null, [ 1, 8, 4, 0, -4, 7 ] ) ); // old technique
console.log( Math.max(...[ 1, 8, 4, 0, -4, 7 ] ) );

// forming one array from another
let arr = [ 1, 8, 4, 0, -4, 7 ];
let arrNew = [...arr, 10, 2];
console.log( arrNew );

// concatenating arrays
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];

// Prepend all items from arr1 onto arr2
Array.prototype.unshift.apply(arr2, arr1); // old technique
console.log( arr2 );

var arr3 = [0, 1, 2];
var arr4 = [3, 4, 5];
arr4 = [...arr3, ...arr4];
console.log( arr4 );