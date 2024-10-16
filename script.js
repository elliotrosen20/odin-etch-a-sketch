const button = document.querySelector(".prompt");
const container = document.querySelector(".container");

function getPixelValue() {
    let pixels;
    do {
        pixels = parseInt(prompt("How many squares per side do you want on your grid (<100)?"));
    } while (isNaN(pixels) && (pixels < 1) && (pixels > 100));
    return pixels;
}

function createGrid(pixels) {
    for (let i = 0; i < pixels; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row")
        for (let j = 0; j < pixels; j++) {
            const box = document.createElement("div");
            box.setAttribute("class", "item");
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

button.addEventListener("click", () => {
    container.innerHTML = "";
    let pixelCount = getPixelValue();
    createGrid(pixelCount);
});