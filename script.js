const container = document.querySelector(".container");
const square = document.createElement("div");
square.classList.add("square");
const max_size = 100;
let size = 50;

function createCanvas(size) {
    let height = 100 / size;
    square.style.height = height + "%";
    for (let i = 0; i < size**2; i++) {
        container.appendChild(square.cloneNode(true));
    }
    enableDrawing();
    return;
}
createCanvas(size);

// Drawing effect
function enableDrawing() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((sqr) => {
        sqr.addEventListener("mouseover", () => {
            sqr.style.backgroundColor = "black";
        });
        sqr.addEventListener("mouseout", () => {
            sqr.style.backgroundColor = "#4d4d4d";
            sqr.style.filter = "blur(7px)";
        });
    });
}

// Resize canvas/grid
const button = document.querySelector("#size");
button.addEventListener("click", () => {
    size = 101;
    while(size > max_size) {
        size = prompt("Enter new canvas size\n(squares per side)(max. 100)");
    }
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    createCanvas(size);
});

