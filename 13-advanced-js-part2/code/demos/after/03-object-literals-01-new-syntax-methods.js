let obj;

// old syntax for method of an object
obj = {
    a: 1,
    getA: function() { // method defined using old syntax
        return this.a;
    }
};

console.log( `[old syntax for object's methods] obj.getA() = `, obj.getA() );

obj = {
    a: 1,
    getA() { // methods can be defined this way
        return this.a;
    }
};

console.log( `[new syntax for object's methods] obj.getA() = `, obj.getA() );