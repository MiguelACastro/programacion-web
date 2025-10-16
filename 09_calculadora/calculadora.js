function calcular(num1, num2, operacion) {
    num1 = Number.parseInt(num1)
    num2 = Number.parseInt(num2)

    let resultado;

    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2
            break;
        case "*":
            resultado = num1 * num2
            break;
        case "/":
            if (num2 == 0) {
                console.error("No es posible dividir entre 0")
            } else {
                resultado = num1 / num2
            }
            break;
        default:
            console.error("Operación no válida")
            break;
    }
    return resultado;
}



let numero1 = prompt("Escribe el primer numero: ");
let operacion = prompt("Escribe la operación (+, -, *, /): ");
let numero2 = prompt("Escribe el segundo numero: ");

let resultado = calcular(numero1, numero2, operacion)
if (resultado != undefined) {
    alert("El resultado de la operación es: " + resultado)
    console.log("El resultado de la operación es: " + resultado)
}