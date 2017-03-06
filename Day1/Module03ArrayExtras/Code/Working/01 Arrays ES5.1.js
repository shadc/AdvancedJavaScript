/* Topic: Array Methods Review */

// Array Methods Review
console.log("");
console.log("*** Array Methods Review ***");

let names = ["Zero", "One", "Two", "Three", "Two", "One"];
let numbers = [1, 2, 3, 4, 5];

// Array.prototype.indexOf
// Note: Returns numeric position of value passed, -1 if not found
console.log("");
console.log("*** Array.prototype.indexOf ***");

console.log(names.indexOf("Two"));                                                      // 2 
console.log(names.indexOf("Three"));                                                    // 3
console.log(names.indexOf("Four"));                                                     // -1

// Array.prototype.lastIndexOf
// Note: Returns numeric position of value passed starting from the end, -1 if not found
console.log("");
console.log("*** Array.prototype.lastIndexOf ***");

console.log(names.lastIndexOf("Two"));                                                  // 4 
console.log(names.lastIndexOf("Three"));                                                // 3
console.log(names.lastIndexOf("Four"));                                                 // -1

// Array.prototype.map
// Note: map() creates a new array with the results of calling the function on every element in this array
console.log("");
console.log("*** Array.prototype.map ***");

console.log(numbers.map(x => x * 10));                                                  // [10, 20, 30, 40, 50]
console.log(numbers.map(x => "Num: " + x));                                             // ["Num: 1", "Num: 2", "Num: 3", "Num: 4", "Num: 5"]

// Array.prototype.reduce
// Note: reduce() applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value
console.log("");
console.log("*** Array.prototype.reduce ***");

console.log(numbers.reduce((a, c) => a + c));                                           // 15
console.log(names.reduce((a, c) => a + c));                                             // ZeroOneTwoThreeTwoOne

// Array.prototype.reduceRight
// Note: reduce() applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value
console.log("");
console.log("*** Array.prototype.reduceRight ***");

console.log(numbers.reduceRight((a, c) => a + c));                                      // 15
console.log(names.reduceRight((a, c) => a + c));                                        // OneTwoThreeTwoOneZero

// Array.prototype.filter
// Note: filter() creates a new array with all elements that pass the test implemented by the provided function
console.log("");
console.log("*** Array.prototype.filter ***");

console.log(numbers.filter(x => x % 2 === 0));                                          // [2, 4]
console.log(names.filter(x => x.length === 3));                                         // ["One", "Two", "Two", "One"]

// Array.prototype.forEach
// Note: forEach() executes a provided function once for each array element
console.log("");
console.log("*** Array.prototype.forEach ***");

numbers.forEach(x => console.log(x));                                                   // 1 2 3 4 5
names.forEach(x => console.log(x));                                                     // Zero One Two Three Two One

// Array.prototype.every
// Note: every() tests whether all elements in the array pass the test implemented by the provided function
console.log("");
console.log("*** Array.prototype.every ***");

console.log(numbers.every(x => x < 10));                                                // true
console.log(names.every(x => x.length > 3));                                            // false

// Array.prototype.some
// Note: some() tests whether some elements in the array pass the test implemented by the provided function
console.log("");
console.log("*** Array.prototype.some ***");

console.log(numbers.some(x => x < 10));                                                 // true
console.log(names.some(x => x.length > 3));                                             // true
