function ShoppingCart( cartName ) {
    this.cartName = cartName;
    this.items = [];

    this.addItem = function( item ) {
        this.items.push( item );
    }

    this.removeItem = function( item ) {
        var index = this.items.indexOf( item );
        if( index !== -1 ) {
            this.items.splice( index, 1 );
        }
    }

    this.display = function() {
        console.log( 'Items in the cart (' + this.cartName + ') are...' );
        for( var i = 0; i < this.items.length; i++ ) {
            console.log( this.items[i] );
        }
        console.log( '***' );
    }
}

var groceryCart = new ShoppingCart( 'Grocery' );
var gadgetsCart = new ShoppingCart( 'Gadgets' );

groceryCart.addItem( 'Soap' );
groceryCart.addItem( 'Cornflakes' );
groceryCart.display();

groceryCart.items = {}; // bad - don't do this

gadgetsCart.addItem( 'Samsung Galaxy S9' );
gadgetsCart.display();

groceryCart.removeItem( 'Soap' );
groceryCart.display();
