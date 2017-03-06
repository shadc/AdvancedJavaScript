console.log("main.js loaded...");

loadJS("01 AJAX.js");

function loadJS(file) {
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = "Working/" + file;
    document.getElementsByTagName('head')[0].appendChild(newScript);
}

class Student6 extends Person6 {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName);
        this.grade = grade;
    }
    name() { return super.name() + " has a " + this.grade }
}