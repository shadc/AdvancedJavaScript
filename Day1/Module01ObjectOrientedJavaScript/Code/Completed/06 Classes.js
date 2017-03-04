/* Topic: Classes in ES6 */
/* Topic: Static Methods */

// Class Declarations
// Note: Methods must use concise syntax name() {} instead of name: function() {}
// Note: Class declarations are not hoisted
// Note: All code in a class run in strict mode
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// Note: Class methods are not enumerable
// Note: Class methods cannot not be called with new keyword since they lack a [[Construct]] method
// Note: Calling a class without new keyword throws an error
console.log("");
console.log("*** Class Declarations ***");

class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    name() { return this.firstName + " " + this.lastName; }
}
var person1 = new Person1("Bam-Bam", "Rubble");
console.log(person1.name());                                                            // Bam-Bam Rubble
console.log(person1);                                                                   // Person1 {firstName: "Bam-Bam", lastName: "Rubble"}
console.log(Person1);                                                                   // class Person1 {...}
console.log(typeof Person1);                                                            // function


// Class Expressions
// Note: Class expressions are not hoisted either
console.log("");
console.log("*** Class Expressions ***");

var Person2 = class {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    name() { return this.firstName + " " + this.lastName; }
}
var person2 = new Person2("Bam-Bam", "Rubble");
console.log(person2.name());                                                            // Bam-Bam Rubble
console.log(person2);                                                                   // Person2 {firstName: "Bam-Bam", lastName: "Rubble"}


// Named Class Expressions
console.log("");
console.log("*** Named Class Expressions ***");

var Person3 = class Person3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    name() { return this.firstName + " " + this.lastName; }
}
var person3 = new Person3("Bam-Bam", "Rubble");
console.log(person3.name());                                                            // Bam-Bam Rubble
console.log(person3);                                                                   // Person3 {firstName: "Bam-Bam", lastName: "Rubble"}


// Immediately Invoked Class Expressions
console.log("");
console.log("*** Immediately Invoked Class Expressions ***");

var person4 = new class {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    name() { return this.firstName + " " + this.lastName; }
}("Bam-Bam", "Rubble");
console.log(person4.name());                                                            // Bam-Bam Rubble
console.log(person4);                                                                   // Object {firstName: "Bam-Bam", lastName: "Rubble"}


// Static Members
// Note: static members are placed in the object itself, not its prototype
console.log("");
console.log("*** Static Members ***");

class Person5 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static create(firstName, lastName) {
        return new Person5(firstName, lastName);
    }

    name() { return this.firstName + " " + this.lastName; }
}
var person5 = Person5.create("Bam-Bam", "Rubble");
console.log(person5.name());                                                            // Bam-Bam Rubble
//console.log(Person5.name());                                                          // Doesn't work since Person5 is really a function
// Note: static method not visisble from the object
console.log(person5);                                                                   // Person5 {firstName: "Bam-Bam", lastName: "Rubble"}
// Note: In order to see static method view the class itself
console.log(Person5);                                                                   // class Person5 { static create(firstName, lastName) {} ... }


// Extends
// Note: super() calls superclass constructor and can only be used in a subclass constructor
// Note: super() must be called before accessing this keyword, since its responsible for its creation
// Note: super.method(), super.property, or super.prototype can be called from anywhere
console.log("");
console.log("*** Extends ***");

class Person6 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name() { return this.firstName + " " + this.lastName; }
}
class Student6 extends Person6 {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName);
        this.grade = grade;
    }
    name() { return super.name() + " has a " + this.grade }
}
var person6 = new Person6("Bam-Bam", "Rubble");
console.log(person6.name());                                                            // Bam-Bam Rubble
console.log(person6);                                                                   // Person6 {firstName: "Bam-Bam", lastName: "Rubble"}

var student6 = new Student6("Bam-Bam", "Rubble", 85);
console.log(student6.name());                                                           // Bam-Bam Rubble has a 85
console.log(student6);                                                                  // Student6 {firstName: "Bam-Bam", lastName: "Rubble", grade: 85}
