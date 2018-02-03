/**
 * Old and new syntax for creating an object whose properties happen to have the same name as variables that set their value
 */

function shoppingCart() {
    let items = [];

    let find = function( item ) {
        return items.indexOf( item );
    };

    let add = function( item ) {
        if( find( item ) === -1 ) {
            items.push( item );
        }
    };

    let remove = function( item ) {
        items.splice( find( item ), 1 );
    };

    let show = function() {
        console.log( 'items = ', items );
    };

    // Step 1: Return an object with add, remove and show methods. Use ES5 syntax

    // Step 2: Comment out the previous return statement and now use the concise new syntax - since property values come from variable with same name, we can use the new syntax
}

let groceriesCart = shoppingCart();
groceriesCart.add( 'Lays potato chips' )
groceriesCart.add( 'Hair oil' );
groceriesCart.show();