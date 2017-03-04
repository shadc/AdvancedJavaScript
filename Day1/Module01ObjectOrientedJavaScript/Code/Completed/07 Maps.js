/* Topic: ES6 Maps */
/* Topic: Maps v/s Objects */

// Maps
// Note: A map is a key / value pair collection
// Note:  Objects vs Maps
//      Object properties always coerce values into strings, map keys do not
//      Map keys can be objects, object properties can not
console.log("");
console.log("*** Maps ***");

// Use set(), get() and size to work with maps
var map1 = new Map();
map1.set("key1", "Value1");
map1.set("key2", "Value2");
console.log(map1.get("key1"));                                                           // Value1
console.log(map1.get("key2"));                                                           // Value2
console.log(map1.size);                                                                  // 2

// Keys can be strings or numbers and are stored separately
var map2 = new Map();
map2.set(5, "five");
map2.set("5", 5);
console.log(map2.get(5));                                                                // five
console.log(map2.get("5"));                                                              // 5

// Keys can also be objects
var map3 = new Map();
var key1 = {};
var key2 = {};
map3.set(key1, "Value1");
map3.set(key2, "Value2");
console.log(map3.get(key1));                                                              // Value1
console.log(map3.get(key2));                                                              // Value2

// Create a set by passing array to ctor
var map4 = new Map([["key1", "Value1"], ["key2", "Value2"], ["key3", "Value3"]]);
console.log(map4.size);                                                                  // size = 3

// Convert back to an array with spread operator ...
var array4 = [...map4];
console.log(array4.length);                                                              // length = 3

// Like an array, maps have a forEach method to iterate across keys
map4.forEach(function(value, key, ownerMap) {
 console.log(key + " " + value);                                                        // key1 Value1 key2 Value2 key3 Value3
});

// Remove key using delete() method
console.log(map4.size);                                                                  // size = 3
map4.delete("key2");
console.log(map4.size);                                                                  // size = 2

// Remove all keys with clear() method
map4.clear();
console.log(map4.size);                                                                  // size = 0


// Weak Maps
// Note: Weak maps only store objects and does not keep a reference to that object
// Note: Weak map only have set(), get(), and delete() methods.  No forEach() or size
// Note: Not possible to truely test Weak Maps because the key has to be destroyed, but working internally
console.log("");
console.log("*** Weak Maps ***");

var weakMap = new WeakMap();
weakMap.set(key1, "Value1");
// Note: This will remove entry from Weak Map
key1 = null;                                                                             
console.log(weakMap.get(key1));                                                         // undefined
