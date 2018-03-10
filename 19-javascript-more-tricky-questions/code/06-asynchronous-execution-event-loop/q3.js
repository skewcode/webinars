// *** Solution that DOES NOT work for large arrays ***
// when you have a huge array this will fail
var list = readHugeList(); // returns array

var nextListItem = function() {
    var item = list.pop();
    console.log( item );

    if( item ) {
        // process the list item...
        nextListItem();

        var x = 1 + 2; // this will be delayed
    }
};
nextListItem();

// *** Solution that works ***
// this will work for an array of any size

var list = readHugeList(); // return array, say [1, 2, 3, 4]

var nextListItem = function() {
    var item = list.pop(); // 4
    console.log( item ); // logs 4

    if( item ) {
        // process the list item...
        setTimeout( nextListItem, 0 ); // the recursive function call happens only when the browser is free - i.e. when the function call stack is empty
    }
};
nextListItem(); // line 32

// browser is free after call on line 32 - so now recursive call happens