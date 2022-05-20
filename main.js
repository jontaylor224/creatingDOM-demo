const createButton = document.querySelector("#create")
const targetElement = document.querySelector("#target")

function createElement () {
    let newElement = document.createElement("div")
    newElement.innerText = Math.floor(Math.random() * 100)
    newElement.classList.add("box")
    targetElement.append(newElement)
}

function create20Elements() {
    for (let index = 0; index < 20; index += 1) {
        createElement()
    }
}

createButton.addEventListener("click", create20Elements)