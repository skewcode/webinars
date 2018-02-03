/**
 * Definition of Person class using old syntax. As a good practice we add methods to the prototype property of the Person constructor function - all instances of Person get their prototype set to Person.prototype
 */
function Person1( name, age ) {
    this.name = name;
    this.age = age;
}

// a 'static' method (method for class and not instance) using old syntax
Person1.sayHello = function() {
    console.log( 'Hello' );
}

Person1.prototype.getName = function() {
    return this.name;
};

Person1.prototype.getAge = function() {
    return this.age;
};

Person1.prototype.setName = function( name ) {
    this.name = name;
    return this; // support chaining of method calls
};

Person1.prototype.setAge = function( age ) {
    this.age = age;
    return this;
};

Person1.prototype.celebrateBirthday = function() {
    this.setAge( this.getAge() + 1 ); // we can also say this.age++ directly
    return this;
};

Person1.sayHello();

let john = new Person1( 'John', 30 );
console.log( `Updated age of John = ${john.celebrateBirthday().getAge()}` );

/**
 * Definition of Person2 class using new syntax. A special method called constructor() is called when an instance is created. Additionally static methods are now directly supported.
 * The syntax for new features is similar to the one used in most common OOP languages like C++, Java etc.
 * Note: Under the hood, ES205 still uses prototypical inheritance (inheritance using an object's prototype) rather than classical inheritance used by C++, Java etc.
*/
class Person2 {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    // a 'static' method using new syntax
    static sayHello() {
        console.log( 'Hello' );
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    setName( name ) {
        this.name = name;
        return this;
    }

    setAge( age ) {
        this.age = age;
        return this;
    }

    celebrateBirthday() {
        this.setAge( this.getAge() + 1 );
        return this;
    }
}

Person2.sayHello();

let jenny = new Person2( 'Jenny', 25 );
console.log( `Updated age of Jenny = ${jenny.celebrateBirthday().getAge()}` );