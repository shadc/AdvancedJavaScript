// /* Topic: Function Expressions */
// /* Topic: Hoisting */

// // Function Declaration 
// function functionDeclaration() {}

// // Anonymous Function Expression
// var varDeclaration1 = function() {}

// // Named Function Expression
// var varDeclaration2 = function functionName() {}


// Hoisting
// Variable declarations
function variableHoisting() {
    // console.log(var2);                                                                  // Uncaught ReferenceError: var2 is not defined

    if (true) {
        var var1 = 1;
    } else {
        var1 = 2;
    }
    return var1;
}
console.log(variableHoisting());			                                            // returns 1

// gets hoisted to
function variableHoisted() {
    var var1;
    if (true) {
        var1 = 1;
    } else {
        var1 = 2;
    }
    return var1;
}
console.log(variableHoisted());			                                                // returns 1

// Note: Function declarations are hoisted (code and all) to top of their scope
function functionDeclarationHoisting() {
    function bar() { return 1; }
    return bar();
    function bar() { return 2; }
}
console.log(functionDeclarationHoisting());			                                    // returns 2

// // gets hoisted to
// function functionDeclarationHoisted() {
//     function bar() { return 1; }
//     function bar() { return 2; }
//     return bar();
// }
// console.log(functionDeclarationHoisted());			                                    // returns 2

// // Function expressions, only the variable declaration is hoisted
// function functionExpressionHoisting() {
//     var bar = function() { return 1; }
//     return bar();
//     var bar = function() { return 2; }
// }
// console.log(functionExpressionHoisting());			                                    // returns 1

// // gets hoisted to
// function functionExpressionHoisted() {
//     var bar;
//     var bar;

//     bar = function() { return 1; }
//     return bar();
//     bar = function() { return 2; }	// Unreachable
// }
// console.log(functionExpressionHoisted());			                                    // returns 1