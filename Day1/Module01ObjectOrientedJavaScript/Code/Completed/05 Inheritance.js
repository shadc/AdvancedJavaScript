// Tangent: Inheritance

// Inheritance with Constructor Functions
console.log("");
console.log("*** Inheritance with Constructor Functions ***");

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.name = function() { return this.firstName + " " + this.lastName }

// Note: Everytime a Student is created, create a new Person for it's prototype
Student.prototype = new Person();         

// Note: Otherwise it points to Person                              
Student.prototype.constructor = Student;                                
function Student(firstName, lastName, grade) {
    // Note: super call to constructor in Person passing name arguments
    Person.call(this.__proto__, firstName, lastName);                   
    this.grade = grade;
}
Student.prototype.name = function() { 
    // Note: super call to info() function in Person and concatenating grade info
    return  Person.prototype.name.call(this) + " has " + this.grade;    
};

var person1 = new Person("Pebbles", "Flintstone");
console.log(person1.name());                                                            // Pebbles Flintstone
console.log(person1);                                                                   // Person {firstName: "Pebbles", lastName: "Flintstone"}

var student1 = new Student("Pebbles", "Flintstone", 100);                               // Pebbles Flintstone has 100
console.log(student1.name());                                                           // Student {grade: 100}
console.log(student1);


// Factory Style
console.log("");
console.log("*** Factory Style ***");

function personFactory(firstName, lastName) {
    var newPerson = {}; 
    newPerson.firstName = firstName;
    newPerson.lastName = lastName;
    newPerson.name = function() { return this.firstName + " " + this.lastName; }
    return newPerson;
};

function studentFactory(firstName, lastName, grade) {
    var newStudent = {};
    newStudent.grade = grade;
    newStudent.__proto__ = personFactory(firstName, lastName);
    newStudent.name = function() { return newStudent.__proto__.name() + " has a " + this.grade }
    return newStudent;
};

var person2 = personFactory("Pebbles", "Flintstone");
console.log(person2.name());                                                            // Pebbles Flintstone
console.log(person2);                                                                   // Object {firstName: "Pebbles", lastName: "Flintstone"}

var student2 = studentFactory("Pebbles", "Flintstone", 100);                            
console.log(student2.name());                                                           // Pebbles Flintstone has a 100
console.log(student2);                                                                  // Object {grade: 100}
