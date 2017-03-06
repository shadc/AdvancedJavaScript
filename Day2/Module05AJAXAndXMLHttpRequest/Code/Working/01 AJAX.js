/* Topic: What is AJAX? */
/* Topic: The XMLHttpRequest Object */
/* Topic: Request Methods */
/* Topic: Creating a Simple Request */
/* Topic: Callback Functions */
/* Topic: Cross Site Scripting and Security with CORS */
//      https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS

console.log("");
console.log("*** AJAX ***");

function loadData(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    
    // Note: Callback function for successful load
    request.onload = function () {
        if (request.status === 200) { 
            console.log("Data loaded successfully");
            showData(request.response); 
        } 
        else { 
            console.log("Data did not load!  Error Code:" + request.statusText);
            throw Error("Data did not load!  Error Code:" + request.statusText); 
        }
    };
    // Note: Callback function using Arrow syntax
    request.onerror = () => { 
        console.log("There was a network error.");
        throw Error("There was a network error."); 
    };
    request.send();
}

function showData(response) {
    console.log(response);                                                              // {"firstName":"Fred","lastName":"Flintstone","kind":"Person"}
    let obj = JSON.parse(response);
    console.log(obj);                                                                   // Object {firstName: "Fred", lastName: "Flintstone", kind: "Person"}
}

console.log("Loading..."); 
loadData("fred.json");
