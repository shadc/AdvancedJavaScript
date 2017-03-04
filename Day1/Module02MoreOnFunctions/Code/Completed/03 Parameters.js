/* Topic: Default Values */
/* Topic: Flexible Arguments */

// Default Parameters

// ES5 Pattern to Simulate Default Parameters
console.log("");
console.log("*** ES5 Pattern to Simulate Default Parameters ***");

function es5DefaultParameters(param1, param2) {
    param1 = param1 || "default";
    param2 = (typeof param2 !== 'undefined') ? param2 : "default";
    console.log("param1 = " + param1);
    console.log("param2 = " + param2);
}
es5DefaultParameters();                                                                 // param1 = default param2 = default
es5DefaultParameters(1);                                                                // param1 = 1 param2 = default
es5DefaultParameters(1, 2);                                                             // param1 = 1 param2 = 2
es5DefaultParameters(0, 0);                                                             // param1 = default param2 = 0


// ES6 Default Parameters
console.log("");
console.log("*** ES6 Default Parameters ***");

// Note: Implicit "use strict" applied when using ES6 default parameters
function es6DefaultParameters(param1 = "default", param2 = "default") {
    console.log("param1 = " + param1);
    console.log("param2 = " + param2);
}
es6DefaultParameters();                                                                 // param1 = default param2 = default
es6DefaultParameters(1);                                                                // param1 = 1 param2 = default
es6DefaultParameters(1, 2);                                                             // param1 = 1 param2 = 2
es6DefaultParameters(0, 0);                                                             // param1 = 0 param2 = 0


// ES6 Default Parameter Features
console.log("");
console.log("*** ES6 Default Parameter Features ***");

function es6DefaultParameterFeature1(param1, param2 = param1) {
    console.log("param1 = " + param1);
    console.log("param2 = " + param2);
}
es6DefaultParameterFeature1(1);                                                         // param1 = 1 param2 = 1
// Note: Can't reverse them due to Temporal Dead Zone / creation order

function getValue() { return 5; }
function es6DefaultParameterFeature2(param3, param4 = getValue()) {
    console.log("param3 = " + param3);
    console.log("param4 = " + param4);
}
es6DefaultParameterFeature2(1);                                                         // param1 = 1 param2 = 5
// Note: Watch out for missing parathesis on getValue(), passes function reference instead of calling


// ES5 arguments Object 
console.log("");
console.log("*** ES5 arguments Object ***");

function es5ArgumentsObject(param1) {
    console.log(arguments);
    // Note: arguments is array-like, not an array so no support for forEach()
    for (let i = 0; i < arguments.length; i++) console.log(arguments[i]);
}
es5ArgumentsObject(1, 2, 3);                                                            // [1, 2, 3]    1 2 3 

// ES6 Rest Parameters
console.log("");
console.log("*** ES6 Rest Parameters ***");

// Note: Only one rest parameter per function
// Note: Must be last parameter in list
// Note: Not supported in object literal setters
function es6RestParameters(param1, ...params) {
    console.log(params);
    params.forEach(function(value, index, array) { console.log(index + " = " + value)});
}
es6RestParameters(1, 2, 3);                                                             // [2, 3]     0 = 2  1 = 3
