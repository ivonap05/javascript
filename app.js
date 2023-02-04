let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
    paragraphElement.textContent = "Clicked";
    console.log("Paragraph clicked")
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
    //let enteredText = inputElement.value;
    let enteredText = event.target.value; //- ekvivalentni su prva dva
    //let enteredText = event.data; - this is different! - prikazuju se slova pojedinacno
    console.log(enteredText);
    //console.log.(event);
}

inputElement.addEventListener("input", retrieveUserInput);