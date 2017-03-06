console.log("main.js loaded...");

//loadJS("01 Hoisting.js");
//loadJS("02 Block Scope.js");
//loadJS("03 Parameters.js");
//loadJS("04 Arrow Functions.js");
loadJS("05 Spread.js");


function loadJS(file) {
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = "Working/" + file;
    document.getElementsByTagName('head')[0].appendChild(newScript);
}