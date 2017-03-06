/* Tangent: New ES2015 Block Scope Declarations */

// Let - Block level scope (lexical scope) variable declarations
// Note: No hoisting
function let1() {
    let var1;
    if (true) {
        var1 = 1;
    } else {
        var1 = 2;
    }
    return var1;                                                                        // Uncaught ReferenceError: var1 is not defined
}
console.log(let1());

// Note: No redeclaration
function let2() {
    var var1 = 1;
    var var1 = 2;
    // let var1 = 3;                                                                       // Uncaught SyntaxError: Identifier 'var1' has already been declared
}

// Note: Temperal Dead Zone
function let3() {
    console.log(typeof var1);                                                           // undefined
    // console.log(typeof var2);                                                           // Uncaught ReferenceError: var2 is not defined

    let var2 = 1;
}
let3();

// Loops with Block Scope
function let4() {
    var items = [];
    for (var i = 0; i < 10; i++) items[i] = i;
    console.log(i);

    for (let j = 0; j < 10; j++) items[j] = j;
    // console.log(j);                                                                     // Uncaught ReferenceError: j is not defined
}
let4();

// const - block level read-only declaration
function const1() {
    // const var1;                                                                         // Uncaught SyntaxError: Missing initializer in const declaration
    const var2 = 2;
    // var2 = 3;                                                                           // Uncaught TypeError: Assignment to constant variable.
}
const1();