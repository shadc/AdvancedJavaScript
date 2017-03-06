// Object Literal
console.log("");
console.log("*** Object Literal ***");

var fred1 = {
    firstName : "Fred",
    lastName : "Flintstone",
    kind : "person",
    name: function() { return this.firstName + " " + this.lastName; }
}

var barney1 = {
    firstName : "barney",
    lastName : "Rubble",
    kind : "person",
    name() { return this.firstName + " " + this.lastName; }
}

console.log(fred1);
console.log(fred1.name());
console.log(barney1);
console.log(barney1.name());

// list prototypes
console.log(typeof fred1);
console.log(typeof fred1.name());
console.log(typeof fred1.name);

// Constructor Function
console.log("");
console.log("*** Constructor Function ***");

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.kind = 'person';
    this.name = function() { return this.firstName + " " + this.lastName};
}

var shad = new Person('shad', 'campbell');
console.log(shad.name());



// Object.create()
console.log("");
console.log("*** Object.create() ***");

var fred3 = Object.create(fred1);
var shad2 = Object.create(shad);
// Note: Creates a copy of the function
var PersonCopy = Object.create(Person);                                                 

//-- Object.create does not really create a clone... but a reference to the original object. 
//   some wierd stuff with regard to changeing the properties of 1 vs the other.
console.log(fred3);                                                                     // Object {}
console.log(fred3.name());    
console.log(shad2);                                                                     // Object {}
console.log(shad2.name());   

shad2.lastName = "CoolDude";

console.log(shad);  
console.log(shad2);                                                                     // Object {}
console.log(shad2.name()); 