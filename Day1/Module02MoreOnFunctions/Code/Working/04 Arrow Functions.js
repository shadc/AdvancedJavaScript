/* Topic: ES6 Arrow Functions */
/* Topic: Callbacks */

// Arrow Functions
// Note: useful for throwaway functions like anonymous callbacks
console.log("");
console.log("*** Arrow Functions ***");

// Traditional function syntax
let noArrowSum = function(param1, param2) { return param1 + param2; }

// Equivalent arrow function syntax
let arrowSum = (param1, param2) => param1 + param2;

console.log(noArrowSum(1, 2));                                                          // 3
console.log(arrowSum(1, 2));                                                            // 3


// Basic syntaxes
// Note: Only 1 parameter means parathesis not required
let arrow1 = param1 => param1 + 10;
console.log(arrow1(5));                                                                 // 15

// Note: No parameters require empty parathesis
let arrow2 = () => "arrow";
console.log(arrow2());                                                                  // arrow

// Note: Multiple parameters also require parathesis
let arrow3 = (param1, param2, param3) => Math.max(param1, param2, param3);
console.log(arrow3(1, 2, 3));                                                           // 3

// Note: And of course 1 parameter could have parathesis
let arrow4 = (param1) => param1 + 10;
console.log(arrow4(5));                                                                 // 15

// Note: No arguments collection and no duplicate named parameters
// let arrow5 = (param1) => arguments[0];                                                  // Uncaught ReferenceError: arguments is not defined
// let arrow5 = (param1, pararm1) = param1;                                                // Uncaught ReferenceError: Invalid left-hand side in assignment

// Note: More complex function bodies use {} curly braces
let arrow6 = () => {};
console.log(arrow6());                                                                  // undefined

let arrow7 = (param1, param2) => {
    if (param1 > param2) return true;
    else return false;
}
console.log(arrow7(2, 1));                                                              // true

// Note: But to return a object literal the {} curly braces would be confused, so add parathesis
let arrow8 = (param1, param2) => ({ prop1: param1, prop2: param2 });
console.log(arrow8("One", "Two"));                                                      // Object {prop1: "One", prop2: "Two"}


// Arrow Functions do not support this, and that is a good thing!
// this is dynamic based on where function is called
console.log("");
console.log("*** No this binding ***");

var obj1 = {
    outerFunction: function() {
        console.log(this);                                                              // Object {} 
        function nestedFunction() { console.log(this); }                                // Window {...}
        nestedFunction();
    }
}
obj1.outerFunction(); 

// But arrow functions eliminate this problem
var obj2 = {
    outerFunction: function() {
        console.log(this);                                                              // Object {} 
        var nestedFunction = () => { console.log(this); }                               // Object {} 
        nestedFunction();
    }
}
obj2.outerFunction(); 


// Arrow functions cannot be constructed
// Note: Cannot be called with new, no [[Construct]] method
//      Also: No prototype since it cannot be constructed
//      Also: No super, or new.target bindings
var Arrow9 = () => {};
// var obj3 = new Arrow9();                                                                // Uncaught TypeError: Arrow9 is not a constructor


// So why use arrow functions again?
//      no this binding issues
//      great for throwaway anonymous functions 
console.log("");
console.log("*** Great for callbacks and other inline anonymous type functions ***");

let values = [2, 1, 4, 3];
let sort1 = values.sort(function (a, b) { return a - b; });
let sort2 = values.sort((a, b) => a - b);
console.log(sort1);                                                                     // [1, 2, 3, 4]
console.log(sort2);                                                                     // [1, 2, 3, 4]
