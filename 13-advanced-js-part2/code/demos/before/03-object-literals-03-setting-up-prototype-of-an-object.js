let protoObj = {
    a: 1,
    toString() {
        return `[inside protoObj] a = ${this.a}`;
    }
}

// old syntax for setting up prototype of an object
// Aside: instead of setting up individual properties, an alternative is to pass a property descriptor map
// Step 1: Use the old syntax to create a new object obj1 with prototype set to protoObj. Add a property 'a' and a toString() method to it. Within the toString() method, log the property 'a' defined in obj1 as we as the prototype.


// new syntax - use __proto__ to set up the prototype of the object
// the super keyword refers to the prototype of the object having the called method
// Step 2: Repeat step 1 to create obj2. This time set up the prototype using __proto__ property. Also log obj2's own property 'a' (this.a) as well as prototype object's 'a' (super.a)


// test out the methods
console.log( protoObj.toString() );
console.dir( obj1.toString() );
console.dir( obj2.toString() );