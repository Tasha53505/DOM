var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = ul.children;
var done = document.getElementById("done");
var remove = document.getElementsByClassName("remove")

function clearFromList() {
    if (remove.onclick === true) {
        console.log("This remove thing works.")
    }
}

function lineThroughList() {
    this.classList.toggle("done");
}



function inputLength() {
    return input.value.length;
}


function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    updateLi()
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




for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', lineThroughList)
    // console.log(li[i]) --- testing to see if it works.

}


//this now just reruns the top code - It gets the new list with the added item, and applies an event listener to the last added item

function updateLi() {
    const ul = document.querySelector("ul");
    const li = ul.children;
    // so li.length-1 refers to the index of the last item in the li array
    li[li.length-1].addEventListener('click', lineThroughList)
};

button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeypress);




// add addclass to the  new element function //


// you could now add a function that updates the li array so that you are able to linethrough added items to the list


/*1. If you click on the list item, it toggles the .done  class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

Good Luck!

Please note that:

In the browser most code is event driven and writing interactive applications in JavaScript is often about waiting for and reacting to events, to alter the behaviour of the browser in some way. Events occur whenever something happens on a page based on user interaction. These are all defined by w3c.

To react to an event you listen for it and supply a function which will be called by the browser when the event occurs. This function is known as a callback. To read more, check out this link: https://blog.codeanalogies.com/2016/04/11/javascript-callbacks-explained-using-minions/

PS - if you have any questions, reach out to our community in the #js or #helpme channel on Discord (Lecture 2 provides the link if you have not yet joined)!

Resources for this lecture
*/