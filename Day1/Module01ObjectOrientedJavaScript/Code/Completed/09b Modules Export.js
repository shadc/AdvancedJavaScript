/* Topic: Namespacing in JavaScript */
/* Topic: IIFEs */
/* Topic: Closures */

// No export, so private
var myGrades = [93, 95, 88, 0, 55, 91];

// Export it to make it available
export var average = function() {
    var total = 0;
    myGrades.forEach(function (value, index, arrayName) { total = total + value; });
    return Math.floor(total / myGrades.length);
};