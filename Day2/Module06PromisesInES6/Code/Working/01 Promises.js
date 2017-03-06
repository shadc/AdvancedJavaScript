/* Topic: Asynchronous Computation */
/* Topic: Better AJAX calls with Promises */
/* Topic: The Promise Object */
/* Topic: Promise Properties and Methods */
/* Topic: Adapter Patterns in JavaScripts */
/* Topic: Returning A Promise from XMLHttpRequests */
/* Topic: The Q library and Promise Polyfills */
//      https://github.com/kriskowal/q
//      http://ourcodeworld.com/articles/read/316/top-5-best-javascript-promises-polyfills

console.log("");
console.log("*** Promises ***");

function loadData(url) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest(); 
        request.open('GET', url);
        
        // Note: Callback function for successful load
        request.onload = function () {
            if (request.status === 200) { 
                console.log("Data loaded successfully");
                resolve(request.response);
            } 
            else { 
                console.log("Data did not load!  Error Code:" + request.statusText);
                reject(Error("Data did not load!  Error Code:" + request.statusText)); 
            }
        };
        // Note: Callback function using Arrow syntax
        request.onerror = () => { 
            console.log("There was a network error.");
            reject(Error("There was a network error.")); 
        };
        request.send();
    });
}

function showData(response) {
    console.log(response);                                                              // {"firstName":"Fred","lastName":"Flintstone","kind":"Person"}
    let obj = JSON.parse(response);
    console.log(obj);                                                                   // Object {firstName: "Fred", lastName: "Flintstone", kind: "Person"}
}

console.log("Loading..."); 
loadData("fred.json").then(response => showData(response), error => console.log(error));
