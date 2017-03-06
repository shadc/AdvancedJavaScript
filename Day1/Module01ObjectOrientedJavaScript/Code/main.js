console.log("main.js loaded...");

//loadJS("01 Objects.js");
loadJS("02 this.js");
//loadJS("03 Prototypes.js");
//loadJS("04 new.js");
//loadJS("05 Inheritance.js");
//loadJS("06 Classes.js");
//oadJS("07 Maps.js");
//loadJS('08 Sets.js');
//loadJS('09 Modules.js');
//loadJS('09b Modules Export.js');

function loadJS(file) {
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = "Working/" + file;
    document.getElementsByTagName('head')[0].appendChild(newScript);
}