// Person1 class (using old syntax)
function Person1( name, age ) {
    this.name = name;
    this.age = age;
}

Person1.prototype.getAge = function() {
    return this.age;
};

Person1.prototype.logDetails = function() {
    console.log( `name = ${this.name}; age = ${this.age}` );
};

// Employee class and inheritance setup using old syntax
/**
 * Step 1: Define Employee1 that inherits from Person1.
 * 1.1 You will need to use Person1.call() passing the context (this) to initialize base class properties.
 * 1.2 Setup inheritance by setting up the Employee1 constructor's prototype and setting back constructor property of the prototype property to Employee1 (good practice)
 * 1.3 Define methods getRole() and logDetails()
 * 1.4 Test out the class
 */
function Employee1( name, age, role, dept ) {
    // Step 1.1: call Person constructor, passing the newly created object as its context, and name & age

    this.role = role;
    this.dept = dept;
}

// Step 1.2: setup inheritance (and reset the constructor property)

// Step 1.3 Define getter getRole() and logDetails - logDetails should call the base class method logDetails() before logging dept and role - use Object.getPrototypeOf( Employee1.prototype ).logDetails.call( this ) to do this
// setup Employee1 specific methods (only two methods shown as illustraton)

// Step 1.4 - Test out the class Employee1


// Person2 class (using new syntax)
class Person2 {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    logDetails() {
        console.log( `name = ${this.name}; age = ${this.age}` );
    }
}

// Employee class and inheritance setup using new syntax (the extends keyword)
/**
 * Step 2: Define Employee2 that inherits from Person2.
 * 2.1 You will need to use super() to initialize base class properties.
 * 2.2 Setup inheritance by using extends keyword followed by base class name
 * 2.3 Define methods getRole() and logDetails() - this is almost done for you. Call the base class logDetails() method using super keyword (super.logDetails())
 * 2.4 Test out the class
 */
class Employee2 { /* Step 2.2 */
    constructor(name, age, role, dept) {
        // Inside the constructor, super keyword refers to the super class' constructor (i.e Person)
        // The super class constructor is called with the context of the derived class constructor
        // Step 2.1
        

        this.role = role;
        this.dept = dept;
    }

    getRole() {
        return this.role;
    }

    logDetails() {
        // inside a method, super refers to a base class method with the same name
        // Step 2.3: Call super class logDetails()
        console.log( `${this.name} works for ${this.dept}` );
    }
}

// Step 2.4 - Test out the class Employee2