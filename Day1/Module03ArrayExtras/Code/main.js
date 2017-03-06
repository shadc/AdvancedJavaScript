console.log("main.js loaded...");

//loadJS("01 Arrays ES5.1.js");
//loadJS("02 Iterators.js");
loadJS("03 Arrays ES6.js");

function loadJS(file) {
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = "Working/" + file;
    document.getElementsByTagName('head')[0].appendChild(newScript);
}