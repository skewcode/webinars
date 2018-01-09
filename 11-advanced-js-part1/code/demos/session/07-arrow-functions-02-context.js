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
        // Step 1: Define the body of this function which iterates through employees using array's forEach() method and prints the bonus as per percentage given in department property. Note that you will need to store this function's context so as to use it in the forEach() iterator method (its argument).
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
        // Step 2: Repeat step but now now define the forEach() method's argument as an arrow function. THe function will now carry the context of the enclosing function. So we can use 'this' directly.
    }
};

payroll2.calculateBonus();