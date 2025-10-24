let firstNum = "";
let operator = "";
let secondNum = "";
let error = false;

const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const history = document.querySelector(".history > ul");

function calculate(num1, num2, operation) {
    num1 = Number.parseInt(num1)
    num2 = Number.parseInt(num2)

    let res;
    error = false;
    switch (operation) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            if (num2 == 0) {
                alert("No es posible dividir entre cero");
                error = true;
            } else {
                res = num1 / num2;
            }
            break;
    }
    result = res;
    createItem();
    if(!error) {
        firstNum = res;
    } else{
        firstNum = "";
    }
    operator = "";
    secondNum = "";
}

function createItem() {
    const item = document.createElement("li");
    item.textContent = error?"Operación errónea" : firstNum + " " + operator + " " + secondNum + "="+result;
    history.appendChild(item);
}

function updateDisplay() {
    display.textContent = firstNum + " " + operator + " " + secondNum;
}

numBtns.forEach(btn =>
    btn.addEventListener("click", () => {
        if(operator == "") {
            firstNum += btn.textContent;
        } else {
            secondNum += btn.textContent;
        }
        updateDisplay();
    })
 )

operatorBtns.forEach(btn =>
    btn.addEventListener("click", ()=> {
        if(firstNum != "" && operator == "" && secondNum == "") {
            operator = btn.textContent;
        }
        updateDisplay();
    })
)

equalsBtn.addEventListener("click", () => {
    if(firstNum != "" && operator != "" && secondNum!="") {
        calculate(firstNum, secondNum, operator);
        updateDisplay();
    }
})

clearBtn.addEventListener("click", () => {
    firstNum = "";
    operator = "";
    secondNum = "";
    updateDisplay();
})

document.addEventListener("keydown", (e) => {
    if(e.key >= "0" && e.key <= "9") {
        if(operator == "") {
            firstNum += e.key;
        } else {
            secondNum += e.key;
        }
    } else if("/*-+".includes(e.key)) {
        if(firstNum != "" && operator == "" && secondNum == "") {
            operator = e.key;
        }
    } else if(e.key == "=" || e.key == "Enter") {
        if(firstNum != "" && operator != "" && secondNum!="") {
            calculate(firstNum, secondNum, operator);
        }
    }
    updateDisplay();
})