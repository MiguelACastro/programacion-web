import { calculate } from "./math.js";
import { updateDisplay, addHistory, showError } from "./ui.js";

let firstNum = "";
let operator = "";
let secondNum = "";

const numBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

numBtns.forEach(btn =>
    btn.addEventListener("click", () => {
        if(operator == "") {
            firstNum += btn.textContent;
        } else {
            secondNum += btn.textContent;
        }
        updateDisplay(firstNum, operator, secondNum);
    })
 )

operatorBtns.forEach(btn =>
    btn.addEventListener("click", ()=> {
        if(firstNum != "" && operator == "" && secondNum == "") {
            operator = btn.textContent;
        }
        updateDisplay(firstNum, operator, secondNum);
    })
)

equalsBtn.addEventListener("click", () => {
    if (firstNum !== "" && operator !== "" && secondNum !== "") {
        const { result, error } = calculate(firstNum, secondNum, operator);

        if (error) {
            showError();
            addHistory( firstNum, operator, secondNum, result, error);
            firstNum = "";
            operator = "";
            secondNum = "";
        } else {
            addHistory(firstNum, operator, secondNum, result, error);
    
            firstNum = result.toString();
            operator = "";
            secondNum = "";
        }

        updateDisplay(firstNum, operator, secondNum);
    }
});

clearBtn.addEventListener("click", () => {
    firstNum = "";
    operator = "";
    secondNum = "";
    updateDisplay(firstNum, operator, secondNum);
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
    updateDisplay(firstNum, operator, secondNum);
})