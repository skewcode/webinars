/**
 * [
 *     [ 1, 2 ],
 *     [ 3, 4 ]
 * ] => [ 1, 2, 3, 4 ]
 */
Array.prototype.concatAll = function() {
    var result = [];

    this.forEach(function( item ) {
        // result.push( ...item ); // es6
        result.push.apply( result, item ); // es5
    });

    return result;
}

var arr = [
    [ 1, 2 ],
    [ 3, 4 ]
];

console.log( arr.concatAll() );