/* Topic: Iterators */

// Iterators are objects that allow for iteration across members
// Note: Built-in collection types support iterators now in ES6
//      arrays, maps, sets
console.log("");
console.log("*** Built-in Iterators ***");

let colors = ["red", "green", "blue"];
for (let color of colors) console.log(color);                                           // red green blue

// Note: These collections actually provide 3 iterators
//      entries()   return the key value pairs
//      values()    return the values
//      keys()      return the keys
for (let color of colors.entries()) console.log(color);                                 // [0, "red"] [1, "green"] [2, "blue"]
// for (let color of colors.values()) console.log(color);                                  // Not supported yet in Chrome
for (let color of colors.keys()) console.log(color);                                    // 0 1 2 


// User defined Iterators
// Note: You can create your own iterators which require a next() 
//      which returns an object with a value and a done property
console.log("");
console.log("*** User defined Iterators ***");

function createIterator(items) {
    let counter = 0;
    let next = () => {
        let done = (counter >= items.length);
        let value = !done ? items[counter++] : undefined;
        return { done: done, value: value }; 
    }
    return { next: next };
}

var iterator1 = createIterator([1, 2]);
console.log(iterator1.next());                                                          // Object {done: false, value: 1}
console.log(iterator1.next());                                                          // Object {done: false, value: 2}
console.log(iterator1.next());                                                          // Object {done: true, value: undefined}

// Note: To make it loopable the iterator must be called [Symbol.iterator]
function createLoopableIterator(items) {
    return { [Symbol.iterator]() { return createIterator(items) } };
}

var iterator2 = createLoopableIterator([1, 2]);
for (let num of iterator2) console.log(num);                                            // 1 2

// Note: And of course this could be all done in one function or object literal
function createLoopableIterator2(items) {
    return { 
        [Symbol.iterator]() { 
            let counter = 0;
            let next = () => {
                let done = (counter >= items.length);
                let value = !done ? items[counter++] : undefined;
                return { done: done, value: value }; 
            }
            return { next: next };
        }
    }
}
var iterator3 = createLoopableIterator2([1, 2]);
for (let num of iterator2) console.log(num);                                            // 1 2
