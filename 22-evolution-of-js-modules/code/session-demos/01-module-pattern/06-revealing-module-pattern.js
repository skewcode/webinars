function ShoppingCartFactory( cartName ) {
    // "private" variables defined here
    var items = [];
    var unavailableItems = [ 'Shampoo', 'Biscuits' ];
    
    // "private" functions defined here too
    function isAvailable( item ) {
        return unavailableItems.indexOf( item ) === -1;
    }

    function addItem( item ) {
        if( isAvailable( item ) ) {
            items.push( item );
        }
    }

    function removeItem( item ) {
        var index = items.indexOf( item );
        if( index !== -1 ) {
            items.splice( index, 1 );
        }
    }

    function display() {
        console.log( 'Items in the cart (' + cartName + ') are...' );
        for( var i = 0; i < items.length; i++ ) {
            console.log( items[i] );
        }
        console.log( '***' );
    }

    return {
        // "public" properties and methods
        addItem: addItem,
        removeItem: removeItem,
        display: display
    };
}

var groceryCart = ShoppingCartFactory( 'Grocery' );
var gadgetsCart = ShoppingCartFactory( 'Gadgets' );

groceryCart.addItem( 'Soap' );
groceryCart.addItem( 'Cornflakes' );
groceryCart.display();

groceryCart.items = {}; // this line has not effect now

gadgetsCart.addItem( 'Samsung Galaxy S9' );
gadgetsCart.display();

groceryCart.removeItem( 'Soap' );
groceryCart.display();
