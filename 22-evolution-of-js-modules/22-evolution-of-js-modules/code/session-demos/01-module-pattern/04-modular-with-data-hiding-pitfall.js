function ShoppingCart( cartName ) {
    var items = [];
}

ShoppingCart.prototype.addItem = function( item ) {
    items.push( item );
};

ShoppingCart.prototype.removeItem = function( item ) {
    var index = items.indexOf( item );
    if( index !== -1 ) {
        items.splice( index, 1 );
    }
};

ShoppingCart.prototype.display = function() {
    console.log( 'Items in the cart (' + cartName + ') are...' );
    for( var i = 0; i < items.length; i++ ) {
        console.log( items[i] );
    }
    console.log( '***' );
};

var groceryCart = new ShoppingCart( 'Grocery' );
var gadgetsCart = new ShoppingCart( 'Gadgets' );

groceryCart.addItem( 'Soap' );
groceryCart.addItem( 'Cornflakes' );
groceryCart.display();

groceryCart.items = {}; // this line has not effect now

gadgetsCart.addItem( 'Samsung Galaxy S9' );
gadgetsCart.display();

groceryCart.removeItem( 'Soap' );
groceryCart.display();
