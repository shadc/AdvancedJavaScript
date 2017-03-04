/* Additional: ES6 Methods */

// Additional Array Methods added in ES6
console.log("");
console.log("*** Array Methods added in ES6 ***");

// Array.of()
// Note: new Array() constructor has some quirks
console.log("");
console.log("*** Array.of() ***");

console.log(new Array(2));                                                              // []       When passed a single number X, X number of empty entries created
console.log(new Array("2"));                                                            // ["2"]    When passed a single non-number type, a single entry with that value is created
console.log(new Array(1, 2));                                                           // [1, 2]   When multiple parameters passed, entries for each parameter is created
console.log(new Array(1, "2"));                                                         // [1, "2"]

console.log(Array.of(2));                                                               // [2]      Always creates an entry for each parameter regardless of type
console.log(Array.of("2"));                                                             // ["2"]             
console.log(Array.of(1, 2));                                                            // [1, 2]
console.log(Array.of(1, "2"));                                                          // [1, "2"]

// Array.from()
// Note: Convert array like objects (has numeric indices and length property) to arrays
console.log("");
console.log("*** Array.from() ***");

// ES5 Style
function es5ArrayLiketoArray(param1, param2, param3) {
    return argArray = Array.prototype.slice.call(arguments);
}
console.log(es5ArrayLiketoArray(1, 2, 3));                                              // [1, 2, 3]

// ES6 Style
function es6ArrayFrom(param1, param2, param3) {
    return Array.from(arguments);
}
console.log(es6ArrayFrom(1, 2, 3));                                                     // [1, 2, 3]

// With mapping
function es6ArrayFromWithMap(param1, param2, param3) {
    return Array.from(arguments, x => x + 1);
}
console.log(es6ArrayFromWithMap(1, 2, 3));                                              // [2, 3, 4]

// Array.find()
// Note: Finds first value in collection that matches function criteria and returns value
console.log("");
console.log("*** Array.find() ***");

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.find(x => x % 2 === 0));                                            // 2

// Array.findIndex()
// Note: Finds first value in collection that matches function criteria and returns index
console.log("");
console.log("*** Array.findIndex() ***");

console.log(numbers.findIndex(x => x % 2 === 0));                                       // 1

// Note: Array.fill()
console.log("");
console.log("*** Array.fill() ***");

// Note: Fill entire array with 10s
console.log(numbers.fill(10));                                                          // [10, 10, 10, 10, 10]

// Note: Fill array starting at index 2 with 20s
console.log(numbers.fill(20, 2));                                                       // [10, 10, 20, 20, 20]

// Note: Fille array starting at index 2 ending at 3 with 30s
console.log(numbers.fill(30, 2, 4));                                                    // [10, 10, 30, 30, 20]

// Array.copyWithin()
// Note: Copies an array within itself
console.log("");
console.log("*** Array.copyWithin() ***");

// Copy array starting at index 1 into itself at index 2
let names = ["One", "Two", "Three", "Four", "Five"];
console.log(names.copyWithin(2, 1));                                                    // ["One", "Two", "Two", "Three", "Four"]

// Copy array starting at index 1 into itself at index 2 overwritting 3 positions
names = ["One", "Two", "Three", "Four", "Five"];
console.log(names.copyWithin(2, 1, 3));                                                 // ["One", "Two", "Two", "Three", "Five"]
