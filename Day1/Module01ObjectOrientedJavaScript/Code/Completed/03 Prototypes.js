/* Topic: Prototypes in JavaScript */

// Object Literal
console.log("*** Constructor Function ***");
console.log("*** Object Literal ***");

var fred1 = { firstName: "Fred", lastName: "Flintstone", kind: "Person", name: function() { return this.firstName + " " + this.lastName; } };
var barney1 = { firstName: "Barney", lastName: "Rubble", kind: "Person", name() { return this.firstName + " " + this.lastName; } };

console.log(fred1);
console.log(fred1.name());
console.log(barney1);
console.log(barney1.name());

// New Stuff
console.log(Object.getPrototypeOf(fred1));                                              // Object{...}
console.log(fred1.__proto__);                                                           // Object{...}
console.log(Object.getPrototypeOf(barney1));                                            // Object{...}
console.log(barney1.__proto__);                                                         // Object{...}
// console.log(fred1.prototype);                                                        // Doesn't exist, prototype is only a property of functions
// console.log(fred1.[[Prototype]]);                                                    // And [[Prototype]] is internal and exposed via __proto__ and Object.getPrototypeOf() for objects


// Constructor Function
console.log("");
console.log("*** Constructor Function ***");

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
//  this.kind = "Person";
//  this.name = function() { return this.firstName + " " + this.lastName; };
}

// New: Moved down from Constructor Function for better code reuse by adding properties to prototype object
// Note: prototype only applies with new keyword
Person.prototype.kind = "Person"; 

// Note: Function properties behave like static members                                                    
Person.kindStatic = "Person Static";                                                    
Person.prototype.name = function() { return this.firstName + " " + this.lastName; };

// New: Or shortcut
Person.prototype = {
  kind: "Person",
  name: function() { return this.firstName + " " + this.lastName; }
}

// Create objects using Constructor function
var fred2 = new Person("Fred", "Flintstone");
var barney2 = new Person("Barney", "Rubble");

console.log(fred2);
console.log(fred2.name());
console.log(barney2);
console.log(barney2.name());

// New: Check out prototype / static members
console.log(fred2.kind);                                                // Person
console.log(Person.kindStatic);                                         // Person Static
console.log(Person);                                                    // function Person(firstName, lastName) {...}

// prototype of all objects that have a Person prototype
console.log(Person.prototype);                                          // Object {kind: "Person", name: function, constructor: function}

// prototype of fred2 and barney objects, which could be different if it's prototype has been changed                              
console.log(Object.getPrototypeOf(fred2));                              // Object {kind: "Person", name: function, constructor: function}
console.log(fred2.__proto__);                                           // Object {kind: "Person", name: function, constructor: function}
console.log(Object.getPrototypeOf(barney2));                            // Object {kind: "Person", name: function, constructor: function}
console.log(barney2.__proto__);                                         // Object {kind: "Person", name: function, constructor: function}


// Object.create()
console.log("");
console.log("*** Object.create() ***");

var fred3 = Object.create(fred1);
var barney3 = Object.create(barney2);
var PersonCopy = Object.create(Person);                     

console.log(fred3);
console.log(fred3.name());
console.log(barney3);
console.log(barney3.name());
console.log(PersonCopy);


// New: prototype with Object.create()                            
console.log("");
console.log("*** prototype with Object.create() ***");

var person = {
  kind: "Person",
  name: function() { return this.firstName + " " + this.lastName; }
};

var fred4 = Object.create(person);
fred4.firstName = "Fred";
fred4.lastName = "Flintstone";

// or pass object literal to Object.create()
fred4 = Object.create(person, {
    firstName: { value: "Fred" },
    lastName: { value: "Flintstone" }
});

console.log(fred4);                                                     // Object {firstName: "Fred", lastName: "Flintstone"}
console.log(fred4.name());                                              // Fred Flintstone

console.log(Object.getPrototypeOf(person));                             // Object {...}                 
console.log(person.__proto__);                                          // Object {...} 
console.log(Object.getPrototypeOf(fred4));                              // Object {kind: "Person", name: function}
console.log(fred4.__proto__);                                           // Object {kind: "Person", name: function}


// Deep Dive
console.log("");
console.log("*** Deep Dive ***");

console.log(Person.prototype.prototype);                                // undefined (because prototype is a function property only)
console.log(Person.prototype.__proto__);                                // Object { ... }
console.log(Object.getPrototypeOf(Object.getPrototypeOf(fred2)));       // Object { ... }
console.log(Person.constructor);                                        // function Function() { [native code] }
console.log(fred2.constructor);                                         // function Person(firstName, lastName) { ... }
console.log(fred2 instanceof Person);                                   // true
console.log(Person.prototype === fred2.__proto__);                      // true
