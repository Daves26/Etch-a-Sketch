const container = document.querySelector(".container");
const square = document.createElement("div");
square.classList.add("square");
let size = 16;

for (let i = 0; i < size**2; i++) {
    container.appendChild(square.cloneNode(true));
}

const squares = document.querySelectorAll(".square");

squares.forEach((sqr) => {
    sqr.addEventListener("mouseover", () => {
        sqr.style.backgroundColor = "black";
    });
    sqr.addEventListener("mouseout", () => {
        sqr.style.backgroundColor = "#2e2e2e";
        sqr.style.filter = "blur(3px)";
    });
});

const button = document.querySelector("#size");
button.addEventListener("click", () => {
    size = prompt("Enter new canvas size\n(squares per side)");
});