/* Topic: ES6 Sets */

// Sets
// Note: A set is a list of values with no duplicates
console.log("");
console.log("*** Sets ***");

// Use add(), has() and size to work with sets
// Note: String conversion does not happen to set keys
var set1 = new Set();
set1.add(5);
set1.add("5");
set1.add(5);
console.log(set1.has(5));                                                               // true
console.log(set1.size);                                                                 // size = 2

// Each object key is a distinct entry in a set
var set2 = new Set();
var key1 = {};
var key2 = {};
set2.add(key1);
set2.add(key2);
set2.add(key1);
console.log(set2.size);                                                                 // size = 2

// Create a set by passing array to ctor
var set3 = new Set([1, 2, 3, 3, 3, 3, 3, 3]);
console.log(set3.size);                                                                 // size = 3

// Convert back to an array with spread operator ...
var array3 = [...set3];
console.log(array3.length);                                                             // length = 3

// Test existance of a key using has() method
console.log(set3.has(3));                                                               // true
console.log(set3.has(4));                                                               // false

// Like an array, sets have a forEach method to iterate across keys
// Note: with sets the value and key are the same
set3.forEach(function(value, key, ownerSet) {
 console.log(key + " " + value);                                                        // 1 1 2 2 3 3 
});

// Remove key using delete() method
console.log(set3.size);                                                                 // size = 3
set3.delete(2);
console.log(set3.size);                                                                 // size = 2

// Remove all keys with clear() method
set3.clear();
console.log(set3.size);                                                                 // size = 0


// Weak Sets
// Note: Weak sets only store objects and does not keep a reference to that object
// Note: Weak sets only have add(), has(), and delete() methods.  No forEach() or size
// Note: Not possible to truely test Weak Sets because the key has to be destroyed, but working internally
console.log("");
console.log("*** Weak Sets ***");

var weakSet = new WeakSet();
var key3 = {};
weakSet.add(key3);
console.log(weakSet.get(key3));                                                         // true
// Note: This will remove entry from Weak Set
key3 = null;                                                                            
console.log(weakSet.get(key3));                                                         // false
