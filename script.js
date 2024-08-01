const container = document.querySelector(".container");
const square = document.createElement("div");
square.classList.add("square");

for (let i = 0; i < 256; i++) {
    container.appendChild(square.cloneNode(true));
}