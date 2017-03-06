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

// Note: PromiseStatus: pending, resolved / settled, fullfilled, rejected
//      https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md
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

loadData("fred.json").then(response => showData(response), error => console.log(error));


// Chaining Promises
loadData("Data/Level1.json")
    .then(response => JSON.parse(response))                 // can be shortcuted (see 2 lines lower)  
    .then(response => loadData("Data/" + response[0] + ".json"))
    .then(JSON.parse)                                       // Shortcut because it takes in a single parameter which is assumed to be response from previous step
    .then(console.log)
    .catch(console.log);


// Promise.all() - The long way
loadData("Data/Level1.json")
    .then(JSON.parse)
    .then(response => {
            let promises = response.map(value => loadData("Data/" + value + ".json"));
            console.log(promises);

            var results = Promise.all(promises);            // Alternative to all() is race() which resolves after first promise succeeds or rejects
            console.log(results);

            results.then(console.log);
        })
    .catch(console.log);

// Promise.all() - The concise way
loadData("Data/Level1.json")
    .then(JSON.parse)
    .then(response => Promise.all(response.map(value => loadData("Data/" + value + ".json"))).then(console.log))
    .catch(console.log);
