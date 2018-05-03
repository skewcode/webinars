/**
 *  FP-style to print items in an array
 */

var numbers = [ 2, 3, 5, 7, 11, 13, 19 ];

// a similar way to iterate through the items can be applied on any data structure that is "iterable"
numbers.forEach(function( item ) { // the "how" is eliminated
    console.log( item );
});