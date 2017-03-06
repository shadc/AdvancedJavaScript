// Student Question: Simple XML Parsing
console.log("");
console.log("*** JSON ***");

let xmlString = 
    `<bookstore>
        <book>
            <title>Everyday Italian</title>
            <author>Giada De Laurentiis</author>
            <year>2005</year>
        </book>
    </bookstore>`;

let xmlDoc = new DOMParser().parseFromString(xmlString, "text/xml");

console.log(xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue);
console.log(xmlDoc.getElementsByTagName("author")[0].childNodes[0].nodeValue);
console.log(xmlDoc.getElementsByTagName("year")[0].childNodes[0].nodeValue);

for(element of xmlDoc.getElementsByTagName("book")[0].childNodes) 
    if (element.nodeType == 1) console.log(element.childNodes[0].nodeValue);
