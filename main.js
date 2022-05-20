
// first you have to select the elements from the DOM so that JS knows how to interact
const createButton = document.querySelector("#create")
const targetElement = document.querySelector("#target")

// creating DOM elements needs 3 steps:
// 1. create the element with document.createElement()
// 2. add content, classes, styles etc to the new element
// 3. append the new element to the existing DOM element you selected.
function createElement () {
    let newElement = document.createElement("div")
    newElement.innerText = Math.floor(Math.random() * 100)
    newElement.classList.add("box")
    targetElement.append(newElement)
}


// creating multiple elements using a loop
function create20Elements() {
    for (let index = 0; index < 20; index += 1) {
        createElement()
    }
}

// adding an event listener to the button to call our create elements function.
createButton.addEventListener("click", create20Elements)