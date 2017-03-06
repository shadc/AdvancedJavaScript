console.log("");
console.log("*** Class Declarations ***");

class Person1 {
    constructor(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName
    }

static create(firstName, lastName){
    return new Person1(firstName, lastName)
}
    name() {return this.firstName + " " + this.lastName}
}


var person1 = new Person1("BamBam", "Rubble");

console.log(person1);