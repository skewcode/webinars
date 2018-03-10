var obj = {
    numbers: [ 1, 2, 3, 4, 5 ],
    multipler: 2,
    printMultiplicationTable: function() {
        this.numbers.forEach( number => { // inner function syntax for inner function
            // works fine
            console.log( number + ' * ' + this.multipler + ' = ' + ( number * this.multipler ) );
        });
    }
};
obj.printMultiplicationTable();