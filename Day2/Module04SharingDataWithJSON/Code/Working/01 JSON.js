/* Topic: What is JSON? */
/* Topic: Object and Array Literals */
/* Topic: JSON Syntax */
/* Topic: Parse and Stringify */

console.log("");
console.log("*** JSON ***");

// JSON is JavaScript Object Notation
// Note: JSON is used to transfer data using key-value pairs and following a JavaScript oriented Syntax
// Note: Advantages are lighter than competing formats such as XML and native JavaScript support
// Note: Native integration with ES5

var fred1 = { 
    firstName: "Fred", 
    lastName: "Flintstone", 
    kind: "Person", 
    name: function() { return this.firstName + " " + this.lastName; } 
};

console.log(fred1);                                                                     // Object {firstName: "Fred", lastName: "Flintstone", kind: "Person"}

let json = JSON.stringify(fred1);
console.log(json);                                                                      // {"firstName":"Fred","lastName":"Flintstone","kind":"Person"}
console.log(typeof json);                                                               // string

let obj = JSON.parse(json);
console.log(obj);                                                                      // Object {firstName: "Fred", lastName: "Flintstone", kind: "Person"}
console.log(typeof obj);                                                               // object


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.kind = "Person";
    }

    name() { return this.firstName + " " + this.lastName; }
}
var person1 = new Person("Fred", "Flintstone");
console.log(person1);                                                                   // Person {firstName: "Fred", lastName: "Flintstone", kind: "Person"}

json = JSON.stringify(person1);
console.log(json);                                                                      // {"firstName":"Fred","lastName":"Flintstone","kind":"Person"}
console.log(typeof json);                                                               // string

obj = JSON.parse(json);
console.log(obj);                                                                       // Object {firstName: "Fred", lastName: "Flintstone", kind: "Person"}
console.log(typeof obj);                                                                // object
// Note: loss of Person type after parse()

// Note: Use resulting object to provide parameters to constructor
var person2 = new Person(obj.firstName, obj.lastName);
console.log(person2);                                                                   // Person {firstName: "Fred", lastName: "Flintstone", kind: "Person"}

// Note: Object destructuring syntax
var {firstName, lastName} = JSON.parse(json);
console.log(firstName + " " + lastName);                                                // Fred Flinstone
var person3 = new Person(firstName, lastName);                                          // Person {firstName: "Fred", lastName: "Flintstone", kind: "Person"}
console.log(person3);