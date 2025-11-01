export function calculate(num1, num2, operator) {
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);

    let result = null;
    let error = false;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                error = true;
            } else {
                result = num1 / num2;
            }
            break;
        default:
            error = true;
            break;
    }

    return { result, error };
}
