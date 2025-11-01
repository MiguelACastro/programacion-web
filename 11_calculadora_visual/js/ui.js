export const display = document.querySelector(".display");
const history = document.querySelector(".history > ul");

export function updateDisplay(firstNum, operator, secondNum) {
    display.textContent = firstNum + " " + operator + " " + secondNum;
}

export function addHistory(firstNum, operator, secondNum, result, error) {
    const li = document.createElement("li");
    li.textContent = error? "Operación errónea": firstNum + " " + operator + " " + secondNum + "="+result;
    history.appendChild(li);
}

export function showError() {
    alert("No es posible dividir entre cero");
}
