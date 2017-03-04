/* Topic: Namespacing in JavaScript */
/* Topic: IIFEs */
/* Topic: Closures */

// IIFE - Immediate Invoked Function Expression
// Note: This executes once as written
(function() {
    var myGrades = [93, 95, 88, 0, 55, 91];

    function average() {
        var total = 0;
        myGrades.forEach(function (value, index, arrayName) { total = total + value; });
        return Math.floor(total / myGrades.length);
    }
    console.log('Your grade average is ' + average());                                  // Your grade average is 70
}());

// Object Interface / Closures
// Note: myGrades is effectively Private
// Note: This is a closure since it returns either a function or in this case an object with a function
//      Even though outer anonymous function finishes execution, its scope is still available since 
//      nested function is still available
var gradesObject =  (function() {
    // Private
    var myGrades = [93, 95, 88, 0, 55, 91];

    // return all public things
    return {
        average: function() {
            var total = 0;
            myGrades.forEach(function (value, index, arrayName) { total = total + value; });
            return Math.floor(total / myGrades.length);
        }
    }
}());
console.log('Your grade average is ' + gradesObject.average());                         // Your grade average is 70

// Revealing Module Pattern
// Note: very similar to previous example, except all properties / methods are considered Private
//      until they are explicitily made public with the return statement
var gradesRevealing =  (function() {
    // Private until revealed
    var myGrades = [93, 95, 88, 0, 55, 91];

    var average = function() {
        var total = 0;
        myGrades.forEach(function (value, index, arrayName) { total = total + value; });
        return Math.floor(total / myGrades.length);
    };

    // Reveal public members here
    return { average: average }

}());
console.log('Your grade average is ' + gradesRevealing.average());                      // Your grade average is 70


// ES6 Native Modules
// Note: Not supported in any browsers yet, must be transpiled

//import * as gradesModule from "./Completed/09 Modules Export.js";
//console.log(gradesModule.average());

//import average from "./Completed/09 Modules Export.js";
//console.log(average());
