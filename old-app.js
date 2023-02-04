//document.body.children[1].children[0].href = "https://google.com";

//console.dir(document)
//alert()
//window.alert() - same thing 

let anchortElement =  document.getElementById("external-link");
anchortElement.href = "https://google.com";

anchortElement = document.querySelector("p a");
anchortElement.href = "https://instagram.com"

//ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to google";

// 2. Get acces to the parent element that should hold the new element

let firstParagraph = document.querySelector("p");

// 3.Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

//REMOVE ELEMENTS
// 1. Select the elemenet that should be removed

let firstH1Element = document.querySelector("h1");

// 2. Remove it

firstH1Element.remove();
//firstH1Element.parentElement.removeChild(firstH1Element); //for older browsers

//MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

console.log(firstParagraph.innerHTML)

firstParagraph.innerHTML = "This is <strong>important</strong>"
//ako se koristi textContent umjesto innerHTML, <strong> ce se vidjeti na ekranu jer je i to text
 