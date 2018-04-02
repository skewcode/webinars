var items = [];
var cartName;

function addItem( item ) {
    items.push( item );
}

function removeItem( item ) {
    var index = items.indexOf( item );
    if( index !== -1 ) {
        items.splice( index, 1 );
    }
}

function display() {
    for( var i = 0; i < items.length; i++ ) {
        console.log( items[i] );
    }
    console.log( '***' );
}

cartName = 'Grocery';

addItem( 'Soap' );
addItem( 'Cornflakes' );
display();

removeItem( 'Soap' );
display();