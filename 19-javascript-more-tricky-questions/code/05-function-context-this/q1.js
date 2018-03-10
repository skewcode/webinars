var obj = {
    numbers: [ 1, 2, 3, 4, 5 ],
    multipler: 2,
    printMultiplicationTable: function() {
        this.numbers.forEach(function( number ) {
            console.log( this ); // window
            console.log( number + ' * ' + this.multipler + ' = ' + ( number * this.multipler ) );
        });
    }
};
obj.printMultiplicationTable();