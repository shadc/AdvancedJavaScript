/* Topic: Recursion */
/* Additional: Destructuring */
/* Additional: Spread */

// Destructuring
console.log("");
console.log("*** Destructuring ***");

let first, second, third, fourth;

[ first, second ] = [ 1, 2, 3, 4 ];
console.log(first);                                                                     // 1
console.log(second);                                                                    // 2

[ first, , third, fourth ] = [ 1, 2, 3, 4 ];
console.log(first);                                                                     // 1
console.log(third);                                                                     // 3
console.log(fourth);                                                                    // 4

( {first, second} = {first: 10, second: 20} );
console.log(first);                                                                     // 10
console.log(second);                                                                    // 20

console.log("------------");
( {second, first} = {first: 10, second: 20} );
console.log(first);                                                                     // 10
console.log(second);      



// Rest again
console.log("");
console.log("*** Rest ***");

let head, tail;
[ head, ...tail ] = [ 1, 2, 3, 4 ];
console.log(head);                                                                      // 1
console.log(tail);                                                                      // [2, 3, 4]]

[ head, ...tail ] = [ 1 ]
console.log(head);                                                                      // 1
console.log(tail);                                                                      // []


// Spread
console.log("");
console.log("*** Spread ***");

// Note: copy array
let array1, array2, array3;
array1 = [ 1, 2, 3 ];
array2 = [ ...array1 ];
array2[0] = 5;
console.log(array1);                                                                    // [1, 2, 3]
console.log(array2);                                                                    // [5, 2, 3]

// Note: concatenate arrays
array1 = [1, 2]; 
array2 = [3, 4];
array3 = [...array1, ...array2]; 
console.log(array3);                                                                    // [1, 2, 3, 4]

// Note: insert array into another array
array1 = [1, 2]; 
array2 = [5, ...array1, 6, 7]; 
console.log(array2);                                                                    // [5, 1, 2, 6, 7]


// Recursion with spread and destructuring
console.log("");
console.log("*** Recursion ***");

const cards = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
let hand = [0, 1, 2, 3, 4];
let convert = numToConvert => cards[numToConvert];

function map([ head, ...tail ], functionName) {
    // No head or tail, must be empty so this is a non starter
    if(head === undefined && !tail.length) return [];

    // We have a head but no tail, just send the head to the functionName
    // Either the array has only one element or we have finished our recursion
    if(tail.length === 0) { return [ functionName(head) ]; }

    // We have a head and a tail, send head to the functionName and recursively concat the tail on
    return [functionName(head) ].concat(map(tail, functionName));
}
console.log(map(hand, convert));                                                        // ["Ace", "Two", "Three", "Four", "Five"]

// Using a ternary conditional operator
function map2([ head, ...tail ], fn) {
  if (head === undefined && !tail.length) return [];
  return tail.length ? [ fn(head), ...(map(tail, fn)) ] : [ fn(head) ];
}
console.log(map2(hand, convert));                                                       // ["Ace", "Two", "Three", "Four", "Five"]

// Using an Arrow function
var map3 = ([ head, ... tail ], fn) => 
  ( (head !== undefined && tail.length) ? ( tail.length ? [ fn(head), ...(map(tail, fn)) ] : [ fn(head) ] ) : []);
console.log(map3(hand, convert));                                                       // ["Ace", "Two", "Three", "Four", "Five"]
