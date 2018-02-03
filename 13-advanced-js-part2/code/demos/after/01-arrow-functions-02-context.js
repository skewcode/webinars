// the function context ('this' keyword) is different not passed on from enclosing function to inner function when using the old syntax for inner function
let payroll = {
    department: {
        engineering: 10,
        accounts: 20
    },
    employees: [
        { name: 'John', department: 'engineering', salary: 10000 },
        { name: 'Jenny', department: 'accounts', salary: 20000 },
        { name: 'Barry', department: 'engineering', salary: 30000 },
    ],
    calculateBonus: function( percentage ) {
        var that = this; // store the enclosing function's context (the 'this' reference)

        this.employees.forEach( function( e ) { // usual (old) syntax for inner function
            console.log( `[old function syntax for inner function] this in inner function = ${this}` );
            console.log( `${e.name} gets a bonus of $${that.department[e.department] * e.salary / 100}` ); // try substituting that with this - it will result in an error
        });
    }
};

payroll.calculateBonus();

// The function context ('this' reference) is passed from enclosing function to inner function declared using arrow function syntax
let payroll2 = {
    department: {
        engineering: 10,
        accounts: 20
    },
    employees: [
        { name: 'John', department: 'engineering', salary: 10000 },
        { name: 'Jenny', department: 'accounts', salary: 20000 },
        { name: 'Barry', department: 'engineering', salary: 30000 },
    ],
    calculateBonus: function( percentage ) { // usual (old) syntax for functions
        this.employees.forEach( e => { // arrow function used for the inner function
            console.log( `[arrow function syntax for inner function] this in inner function = ${this}` );
            console.log( `${e.name} gets a bonus of $${this.department[e.department] * e.salary / 100}` );
        });
    }
};

payroll2.calculateBonus();