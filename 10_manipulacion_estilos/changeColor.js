function changeColor(color) {
    const container = document.querySelector(".container");

    document.body.style.backgroundColor = color;
    container.style.backgroundColor = color;
}

const redBtn = document.querySelector(".red-btn");
const greenBtn = document.querySelector(".green-btn");
const blueBtn = document.querySelector(".blue-btn");
const resetBtn = document.querySelector(".reset-btn");

redBtn.addEventListener("click", () => changeColor("red"));
greenBtn.addEventListener("click", () => changeColor("green"));
blueBtn.addEventListener("click", () => changeColor("blue"));
resetBtn.addEventListener("click", () => changeColor("white"));

