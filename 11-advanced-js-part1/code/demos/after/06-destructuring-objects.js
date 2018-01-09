// Object destructuring - syntax
let obj = {
    a: 1,
    b: {
        b_1: 2.1,
        b_2: 2.2
    },
    c: 3,
    d: [
        {
            e: 5,
            f: 6
        },
        {
            e: 'E',
            f: 'F'
        }
    ]
};

// extract values of properties a and b - this step declares 2 variables and initializes them
let { a, b } = obj;
console.log( `[basic syntax] a = ${a}, b = ${b}` );

/**
 * We cannot begin a statement with the destructuring syntax
 * If we declare variables explicitly and then use in destructuring we need to take care to surround the destructuring pattern in parenthesis to indicate it is an assignment expression
 */
let x, y;
// { x, y } = { x: 1, y: 2 } // this is a syntax error
({ x, y } = { x: 1, y: 2 });
console.log( `[destructuring cannot start with the object pattern] x = ${x}, y = ${y}` );

// since we use let keyword, we cannot declare variable a or b again (if we used var keyword it would be fine)
// let { a, b } = { a :'A', b: 'B' }; // will result in an error

// variables a and b already exist - so we should rename properties' destructured variables when extracting their values
let { a:a2, b:b2 } = { a :'A', b: 'B' };
console.log( `[renaming] a2 = ${a2}, b2 = ${b2}` );

// extract values of properties a1 and b1 - results in undefined (a soft failure - no error thrown)
let { a1, b1 } = { a :'A', b: 'B' }; // both a and b are uninitialized and hence undefined
console.log( `[extracting properties that do not exist on the object] a1 = ${a1}, b1 = ${b1}` );

// assigning default value if variable not present as property in object
({ a1 = 'A1', b = 'B1', c } = { a :'A', b: 'B', c: 'C' });
console.log( `[assigning default values] a1 = ${a1}, b = ${b}, c = ${c}` );

// renaming and assigning defaults at the same time
let { e:c, f:d, y:x = 1 } = { e:5, f:6 };
console.log( `[renaming and assigning default values] c = ${c}, d = ${d}, x = ${x}` );

// destructuring sub-properties
// Note: b_1, b_# will be created using var keyword (b_1, b_3 have not been declared previously). b_3 will be assigned the default since it is a non-existent property of obj.b
({ a, b: { b_1, b_3 = 2.3 } } = obj);
console.log( `[extracting sub-properties] a = ${a}, b_1 = ${b_1}, b_3 = ${b_3}` );

// even arrays items within can be selectively destructured
let { d: [ { e:e1 }, { e:e2 } ] } = obj;
console.log( `[extracting item details of array properties] e1 = ${e1}, e2 = ${e2}` );


/*
 * Applications of destructuring objects when working with functions
 */

// defaults may be easily assigned to function arguments using destructuring syntax
// Note: we are using the default argument feature for functions in ES2015
function foo( { a = 10, b = 20 } = {} ) {
    console.log( `[defaults for function arguments] a = ${a}, b = ${b}` );
}

foo({
    a: 1
});

foo();

// you can extract only what is required of the returned object using destructuring
function shoppingCart() {
    let items = [];

    let find = function( item ) {
        return items.indexOf( item );
    };

    return {
        add: function( item ) {
            if( find( item ) === -1 ) {
                items.push( item );
            }
        },
        remove: function( item ) {
            items.splice( find( item ), 1 );
        },
        show: function() {
            console.log( 'items = ', items );
        }
    }
}

// suppose we use only add() and show() methods in our code, we can extract only those and use
let { add:addToGroceriesCart, show: showGroceriesCart } = shoppingCart();
addToGroceriesCart( 'Lays potato chips' )
addToGroceriesCart( 'Hair oil' );
showGroceriesCart();