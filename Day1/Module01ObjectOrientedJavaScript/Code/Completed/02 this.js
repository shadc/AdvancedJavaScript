/* Tangent: this keyword */

// Note: this can vary depending on how it is called
console.log("");
console.log("*** global functions ***");
function thisFunction() { console.log(this); }
thisFunction();                                                                         // Window {...} since the window object or global scope made the call to thisFunction()

console.log("");
console.log("*** object functions ***");
var obj = {};
obj.thisFunction = function() { console.log(this); }
obj.thisFunction();                                                                     // Object{thisFunction: function} since obj invoked the function
// All pretty simple so far


// But what about this...
console.log("");
console.log("*** global variables referencing object functions ***");
var callFunction = obj.thisFunction;
callFunction();                                                                         // Window {...} since it was called from the global scope again!
// Note: This can happen with callbacks but probably different object scopes not global


// or this...
console.log("");
console.log("*** this and nested function scopes ***");
var obj2 = {
    outerFunction: function() {
        console.log(this);                                                              // Object{outerFunction: function}
        function nestedFunction() { console.log(this); }                                // Window{...}
        nestedFunction();
    }
}
obj2.outerFunction();                                                                   // This happens because JS loses scope of this when in a nested function
// Note: This happens a lot with events, setTimeout(), or closures


// Note: Ways to fix these issues
// Store a copy of this
console.log("");
console.log("*** var that = this ***");
var obj3 = {
    outerFunction: function() {
        console.log(this);                                                              // Object{outerFunction: function}

        // This is the important bit
        var that = this;                            
        function nestedFunction() { console.log(that); }                                // Object{outerFunction: function}
        nestedFunction();
    }
}
obj3.outerFunction();                                                                   // that keeps a reference to previous this scope

// or use call(), apply(), or bind()
// Note: this allows passing or storing of the this scope to be used
console.log("");
console.log("*** call(), apply(), or bind() ***");
var obj4 = {
    outerFunction: function() {
        console.log(this);                                                              // Object{outerFunction: function}
        function nestedFunction() { console.log(this); }                                // Object{outerFunction: function}

        // These are the important bits
        // Note: call() and apply() are identical except call() takes comma delimited list of function arguments
        nestedFunction.call(this); 
        // Note: and apply() takes an array of function arguments for 2nd parameter                 
        nestedFunction.apply(this);   
        // Note: bind() does not call the function immediately, but will use that same this scope for every future call              
        var bindNestedFunction = nestedFunction.bind(this);
        bindNestedFunction();
    }
}
obj4.outerFunction();