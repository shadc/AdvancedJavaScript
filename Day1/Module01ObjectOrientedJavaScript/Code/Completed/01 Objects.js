/* Tangent: Creating Objects in JavaScript */

// Object Literal
console.log("");
console.log("*** Object Literal ***");

var fred1 = { 
  firstName: "Fred", 
  lastName: "Flintstone", 
  kind: "Person", 
  name: function() { return this.firstName + " " + this.lastName; } 
};
var barney1 = { 
  firstName: "Barney", 
  lastName: "Rubble", 
  kind: "Person", 

  // Note: Concise syntax
  name() { return this.firstName + " " + this.lastName; }                               
};

console.log(fred1);                                                                     // Object {firstName: "Fred", lastName: "Flintstone", kind: "Person"}
console.log(fred1.name());                                                              // Fred Flintstone
console.log(barney1);                                                                   // Object {firstName: "Barney", lastName: "Rubble", kind: "Person"}
console.log(barney1.name());                                                            // Barney Rubble


// Constructor Function
console.log("");
console.log("*** Constructor Function ***");

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.kind = "Person";
  this.name = function() { return this.firstName + " " + this.lastName; };
}

// Create objects using Constructor function
var fred2 = new Person("Fred", "Flintstone");
var barney2 = new Person("Barney", "Rubble");

console.log(fred2);                                                                     // Person {firstName: "Fred", lastName: "Flintstone", kind: "Person"}
console.log(fred2.name());                                                              // Fred Flintstone
console.log(barney2);                                                                   // Person {firstName: "Barney", lastName: "Rubble", kind: "Person"}
console.log(barney2.name());                                                            // Barney Rubble


// Object.create()
console.log("");
console.log("*** Object.create() ***");

var fred3 = Object.create(fred1);
var barney3 = Object.create(barney2);
// Note: Creates a copy of the function
var PersonCopy = Object.create(Person);                                                 

// Note: Different than previous examples since Object.create() adds base object to __proto__
console.log(fred3);                                                                     // Object {}
console.log(fred3.name());                                                              // Fred Flintstone
console.log(barney3);                                                                   // Object {}
console.log(barney3.name());                                                            // Barney Rubble
console.log(PersonCopy);                                                                // Function {}
