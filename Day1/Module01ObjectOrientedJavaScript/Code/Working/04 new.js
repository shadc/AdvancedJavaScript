/* Tangent: new keyword */

// Constructor Functions and new keyword
console.log("");
console.log("*** Constructor Functions and new keyword ***");

// Constructor function
function Person(name) {
  this.name = name;
}

// Create object using Constructor function
var wilma1 = new Person("Wilma Flintstone");
console.log(wilma1);                                                                    // Person { "name": "Wilma Flintstone" }


// Actually does something like this
var wilma2 = {};
wilma2.__proto__ = Person.prototype;
Person.call(wilma2, "Wilma Flintstone");
console.log(wilma2);                                                                    // Person { "name": "Wilma Flintstone" }


// Another way to look at it
function Person2(name) {
  var thisObj = {}; 
  thisObj.__proto__ = Person2.prototype;
  
  thisObj.name = name;
  
  return thisObj;
}

/// Create objects using Constructor function
var wilma3 = new Person2("Wilma Flintstone");

console.log(wilma3);                                                                    // Person2 { "name": "Wilma Flintstone" }
