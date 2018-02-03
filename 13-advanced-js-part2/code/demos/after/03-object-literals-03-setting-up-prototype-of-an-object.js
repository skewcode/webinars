let protoObj = {
    a: 1,
    toString() {
        return `[inside protoObj] a = ${this.a}`;
    }
}

// old syntax for setting up prototype of an object
// Aside: instead of setting up individual properties, an alternative is to pass a property descriptor map
let obj1 = Object.create( protoObj );
obj1.a = 2,
obj1.toString = function() {
    return `[inside obj1] a = ${this.a}; [inherited from protoObj] a = ${Object.getPrototypeOf(this).a}`;
};

// new syntax - use __proto__ to set up the prototype of the object
// the super keyword refers to the prototype of the object having the called method
let obj2 = {
    __proto__: protoObj,
    a: 2,
    toString() {
        return `[inside obj2] a = ${this.a}; [inherited from protoObj] a = ${super.a}`;
    }
};

// test out the methods
console.log( protoObj.toString() );
console.dir( obj1.toString() );
console.dir( obj2.toString() );