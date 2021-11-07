var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var done = document.getElementById("done");

// function strike() {
//     if (onclick === "ul") {


//     }

// }

function inputLength() {
    return input.value.length;
}


function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}


function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}



ul.addEventListener("click", strike)

button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeypress);
