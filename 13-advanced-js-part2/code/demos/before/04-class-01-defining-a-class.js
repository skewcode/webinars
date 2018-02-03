/**
 * Definition of Person class using old syntax. As a good practice we add methods to the prototype property of the Person constructor function - all instances of Person get their prototype set to Person.prototype
 */

 /**
  * Step 1.1: Define a Person constructor that sets name and age
  * Step 1.2: Set a static method sayHello() on Person that simply logs 'hello'
  * Step 1.3: Define instance methods - getters and setters for name and age
  * Step 1.4: Define another instance method celebrateBirthday() taht increments the age by 1
  * Step 1.5: Test out the class and it methods
  */


/**
 * Definition of Person2 class using new syntax. A special method called constructor() is called when an instance is created. Additionally static methods are now directly supported.
 * The syntax for new features is similar to the one used in most common OOP languages like C++, Java etc.
 * Note: Under the hood, ES205 still uses prototypical inheritance (inheritance using an object's prototype) rather than classical inheritance used by C++, Java etc.
*/
// Step 2: Now repeat step 1 to define a class Person2 with similar methods. Use constructor() to initialize. Prefix static method with static keyword. Use new method definition syntax.